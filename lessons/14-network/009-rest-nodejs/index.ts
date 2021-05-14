import WebSocket from "ws";
import faker from "faker";
import express from "express";
import * as path from "path";
import cors from "cors";


const app = express();

app.use(cors());

const emails = Array
  .from({length: 100}, (_, i) =>
    faker.internet.email());


app.use(function (req, res, next) {
  res.set('Cache-control', 'public, max-age=360000');
  next();
})

app.use(express.static(path.join(__dirname, "public")))

app.get("/emails", (_, res) => {
  res.json(emails);
})

app.listen(process.env.PORT, () => {
  console.info("Server is run on ", process.env.PORT);
});


