import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.send("re");
});

app.post("/log", (req, res) => {
    console.log(req);
    res.send("re")
});

app.listen(port, () => {
    console.debug(`Example app listening at http://localhost:${port}`);
});
