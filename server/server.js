const express = require("express");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.post("/api/upload", (req, res) => {
  try {
    const fileStr = req.body.data;
    console.log(fileStr);
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`listening to port ${PORT}`);
});
