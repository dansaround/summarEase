import { useState } from "react";
import Header from "./components/Header";
import AudioUploader from "./components/AudioUploader";
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="App">
      <Header />
      <AudioUploader
        handleResponse={(res) => {
          setResponse(res);
        }}
      />
      <Output response={response} />
      <Footer />
    </div>
  );
}

export default App;
