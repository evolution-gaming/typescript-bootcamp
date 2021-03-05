const http = require("http")
const { getRNGPoints } = require("./fieldUtils")

class Server {
  #silent
  #messageHandler
  #server

  constructor(silent = false) {
    this.#silent = silent
  }

  async start(messageHandler = getRNGPoints) {
    this.#messageHandler = messageHandler
    this.#server = http.createServer(this.#handler)
    this.#server.listen(13337)
    this.#server.once("listening", () => this.#log("RNG server is listening on port 13337"))
  }

  end() {
    return new Promise((resolve, reject) => {
      this.#server.close(error => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }

  changeHandler(handler) {
    this.#messageHandler = handler
  }

  #handler = async (req, res) => {
    if (req.method === "OPTIONS") {
      this.#setCorsHeaders(res)
      res.writeHead(200)
      return res.end()
    }
    if (req.method !== "POST") {
      res.writeHead(404)
      return res.end()
    }
    if (!/\/\d+/.test(req.url)) return this.#sendError(res, "wrong url", req.url)

    const radius = parseInt(req.url.slice(1))
    if (radius > 20) return this.#sendError(res, "Radius is too big, max is 20")

    let body = []
    try {
      body = await this.#getAndParseBody(req)
    } catch (e) {
      return this.#sendError(res, e.message)
    }

    const error = this.#isBodyCorrect(body, radius)
    if (error) return this.#sendError(res, error)

    const rngPoints = this.#messageHandler(radius, body)

    this.#log("RECEIVED:", `radius: ${radius}`, body)
    this.#log("SENDED:", rngPoints)
    this.#sendOK(res, rngPoints)
  }

  #log = (...message) => {
    if (!this.#silent) {
      console.log(...message)
    }
  }

  #getAndParseBody = req =>
    new Promise((resolve, reject) => {
      let body = []
      req.on("data", chunk => body.push(chunk))
      req.on("end", () => {
        body = Buffer.concat(body).toString()

        try {
          resolve(JSON.parse(body))
        } catch (error) {
          reject(error)
        }
      })
      req.on("error", reject)
    })

  #sendError = (res, error) => {
    this.#setCorsHeaders(res)
    res.setHeader("Content-Type", "application/json")
    res.writeHead(500)
    this.#log("Error: ", error)
    res.end(JSON.stringify({ error }))
  }

  #sendOK = (res, data) => {
    this.#setCorsHeaders(res)
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(JSON.stringify(data))
  }

  #setCorsHeaders = res => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Referer")
  }

  #isBodyCorrect = (data, radius) => {
    try {
      if (!Array.isArray(data)) throw new Error("Body should be array")
      if (data.length === 0) return undefined

      data.forEach((d, index) =>
        ["x", "y", "z", "value"].forEach(f => {
          const createFieldError = this.#createError(index, f, d[f])

          if (typeof d[f] !== "number") throw createFieldError("isn't number")
          else if (d[f] == null) throw createFieldError("is undefined or null")
          else if (!isFinite(d[f])) throw createFieldError("isn't finite number")
          else if (f !== "value" && Math.abs(d[f]) > radius) throw createFieldError(`is outside the radius ${radius}`)
        }),
      )
    } catch (e) {
      return e.message
    }
    return undefined
  }

  #createError = (index, field, value) => message => {
    return new Error(`[${index}].${field} = ${value} - ${message}`)
  }
}

module.exports = {
  Server,
}
