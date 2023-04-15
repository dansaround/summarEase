import React, { useState } from "react";
import "../styles/audioUploader.css";
import DownloadIcon from "../assets/downloadIcon.svg";

function AudioUploader({
  handleResponse,
}: {
  handleResponse: (response: string) => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  }

  function handleUpload() {
    if (!selectedFile) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append("audio", selectedFile);

    fetch("https://22c9-186-30-66-167.ngrok-free.app/api/upload-audio", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => handleResponse(data.response))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
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
        <button
          className="btn btn__primary"
          onClick={handleUpload}
          disabled={isLoading}
        >
          {!isLoading ? "Upload" : "Uploading..."}
        </button>
      </div>
    </div>
  );
}

export default AudioUploader;
