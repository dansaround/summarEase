import React, { useState, useEffect } from "react";
import "../styles/audioUploader.css";
import DownloadIcon from "../assets/downloadIcon.svg";

function AudioUploader() {
  const [audioFile, setAudioFile] = useState<File | null>(null);

  useEffect(() => {
    (async () => {
      const r = await fetch("https://c506-186-30-66-167.ngrok.io/");
      const r2 = await r.json();
      console.log(r2);
    })();
  }, []);

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;
    setAudioFile(file);
  }

  function tempFuncion() {
    fetch("https://c506-186-30-66-167.ngrok.io/api/test", {
      method: "POST",

      body: JSON.stringify({
        hola: "key",
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleUpload() {
    if (!audioFile) return;
    const formData = new FormData();
    formData.append("audio", audioFile);

    fetch("https://c506-186-30-66-167.ngrok.io/upload-audio", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setAudioFile(file);
  }

  return (
    <div className="container input__container">
      <div className="input">
        <h2>First Upload your file</h2>
        <div
          className="drop__area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <img src={DownloadIcon} alt="este" />
          <h5>Drag and drop to upload</h5>

          <input type="file" accept=".mp3,.wav" onChange={handleFileSelect} />
          <p>Up to 10MB</p>
        </div>
        <button className="btn btn__primary" onClick={tempFuncion}>
          Upload test
        </button>
      </div>
    </div>
  );
}

export default AudioUploader;
