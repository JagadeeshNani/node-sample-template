const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 8081;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send({ status: true, message: "Server is up and running! " });
});

app.listen(PORT, () => {
    console.log(`Server is up and Running in port ${PORT}`);
});

