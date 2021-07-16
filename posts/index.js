const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

const posts = {};

app.get("/posts", (req, res) => {});

app.post("posts", (req, res) => {});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
