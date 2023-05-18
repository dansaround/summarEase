import React, { useState } from "react";
import "../styles/audioUploader.css";
import DownloadIcon from "../assets/downloadIcon.svg";
import { NO_FILE_SELECTED_COPY } from "../constants";
import LoadingSpinner from "./LoadingSpinner";

function AudioUploader({
  handleResponse,
}: {
  handleResponse: (response: string) => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState(NO_FILE_SELECTED_COPY);
  const [isDragging, setIsDragging] = useState(false); // Add state for dragging

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
    setFilename(file ? file.name : NO_FILE_SELECTED_COPY);
  }

  function handleUpload() {
    if (!selectedFile) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append("audio", selectedFile);

    fetch("http://173.255.198.22:9000/api/upload-audio", {
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

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    setFilename(file ? file.name : NO_FILE_SELECTED_COPY);
    setIsDragging(false); // Reset dragging state
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setIsDragging(true); // Set dragging state
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
  }

  function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.clearData();
    setIsDragging(false); // Reset dragging state
  }

  return (
    <div className="container input__container">
      <div className="input">
        <h2>First Upload your file</h2>
        <label htmlFor="file-upload-input">
          <div
            className={`drop__area ${
              isDragging ? "dragging" : "not__dragging"
            }`} // Add class based on dragging state
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragLeave={handleDragLeave}
          >
            {isLoading ? (
              <LoadingSpinner /> // Render the LoadingSpinner component if isLoading is true
            ) : (
              <>
                <img src={DownloadIcon} alt="este" />
                <h5>Drag and drop or select</h5>

                <input
                  id="file-upload-input"
                  type="file"
                  accept=".mp3,.wav"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <p>{filename}</p>
              </>
            )}
          </div>
        </label>
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
