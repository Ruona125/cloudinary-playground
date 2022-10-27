const express = require("express");
const app = express();
const { cloudinary } = require("./utils/cloudinary");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:dev_setups")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    console.log(uploadResponse);
    res.json({ msg: "uploaded" });
  } catch (err) {
    console.log(err);
    res.status(500).json("something went wrong");
  }
});

const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`listening to port ${PORT}`);
});
