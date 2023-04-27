import "./index.css";
import { useState } from "react";
import Output from "./components/Output";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import AudioUploader from "./components/AudioUploader";

function App() {
  const [response, setResponse] = useState("");
  const showOutput = response ? true : false;
  const resetOutput = () => {
    setResponse("");
  };

  return (
    <div className="App">
      <Navbar />
      {showOutput ? (
        <Output response={response} resetOutput={resetOutput} />
      ) : (
        <div className="main-content">
          <div className="info-section">
            <h2>Upload an audio file</h2>
            <i>(.ogg or .mp3)</i>
            <p>And get useful information about it:</p>
            <ul>
              <li>Transcription</li>
              <li>Summary</li>
              <li>Bullet points</li>
              <li>Useful link references (if apply)</li>
            </ul>
          </div>

          <AudioUploader
            handleResponse={(res) => {
              setResponse(res);
            }}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
