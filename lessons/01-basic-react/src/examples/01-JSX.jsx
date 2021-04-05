import * as React from "react"

function CreateElement() {
  const data = "Text"

  return React.createElement(
    "main",
    {
      id: "asd",
      style: { color: "red" },
    },
    [
      React.createElement(
        "p",
        null,
        `data ${data}`,
      ),
      [(1, 2, 3)].map(el =>
        React.createElement("p", null, el),
      ),
    ],
  )
}

function Jsx() {
  const data = "Text"

  return (
    <main id={"asd"} style={{ color: "red" }}>
      <p>data {data}</p>
    </main>
  )
}

function Interations() {
  return (
    <p>
      {[1, 2, 3].map(el => (
        <span>{el}</span>
      ))}
    </p>
  )
}

function Conditional() {
  const conditional = Math.random() > 0.5
  return (
    <main>
      {conditional ? (
        <p>{`Math.random < 0.5`}</p>
      ) : (
        <p>{`Math.random > 0.5`}</p>
      )}
    </main>
  )
}

function Radio() {
  return (
    <form className="form">
      <label>
        <input
          name="radio"
          value="A"
          type={"radio"}
          checked
        />{" "}
        A
      </label>
      <label>
        <input
          name="radio"
          id="B"
          value="B"
          type="radio"
        />{" "}
        B
      </label>
      <label>
        <input
          name="radio"
          id="C"
          value="C"
          type="radio"
        />{" "}
        C
      </label>
    </form>
  )
}

export { CreateElement as App }
