import { useState } from "react";
import Header from "./components/Header";
import AudioUploader from "./components/AudioUploader";
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  return (
    <div className="App">
      <Header />
      <AudioUploader onFileChange={handleFileChange} />
      <Output />
      <Footer />
    </div>
  );
}

export default App;
