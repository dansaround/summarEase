import { useState } from "react";
import Header from "./components/Header";
import AudioUploader from "./components/AudioUploader";
import Output from "./components/Output";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="main-contennt">
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

      <Output response={response} />
      <Footer />
    </div>
  );
}

export default App;
