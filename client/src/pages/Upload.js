import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [details, setDetails] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);

    setFileInputState(e.target.value);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFile = (e) => {
    console.log("submitting!!!!");
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    const data = {
      data: base64EncodedImage,
      details: details,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      let res = await axios.post("/api/upload", data, headers);
      if (res.status === 200) {
        setFileInputState("");
        setDetails("");
        console.log("uploaded");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>this is the page to upload</p>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="input"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <input
          type="text"
          name="details"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        />
        <button type="submit">Submit</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
}
