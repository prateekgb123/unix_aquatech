import axios from "axios";
import { useState } from "react";

function Upload() {
  const [files, setFiles] = useState([]);

  const uploadFiles = async () => {
    if (files.length === 0) return alert("Select files");

    try {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("file", files[i]);

        // 1️⃣ Upload to Cloudinary
        const res = await axios.post(
          "http://localhost:5000/api/upload",
          formData
        );

        const url = res.data.secure_url;

        // 2️⃣ Save each to MongoDB
        await axios.post("http://localhost:5000/api/projects", {
          title: files[i].name,
          type: files[i].type.includes("video") ? "video" : "image",
          url: url,
        });
      }

      alert("All files uploaded ✅");
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Multiple Images / Videos</h2>

      <input
        type="file"
        multiple   // 🔥 IMPORTANT
        onChange={(e) => setFiles(e.target.files)}
      />

      <br /><br />

      <button onClick={uploadFiles}>Upload All</button>
    </div>
  );
}

export default Upload;