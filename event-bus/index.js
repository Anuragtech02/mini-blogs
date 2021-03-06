const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 4005;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(PORT, () => console.log(`EVENTBUS running on PORT ${PORT}`));
