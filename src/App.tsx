import { useState } from "react";
import Header from "./components/Header";
import AudioUploader from "./components/AudioUploader";
import Output from "./components/Output";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="App">
      <Navbar />
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
