import { useEffect, useState } from 'react';
import './sass/main.scss';

function App() {


  const [file, setFile] = useState("");

  const readFile = (e) => {
    const selectedFile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(selectedFile);
    reader.onload = function() {
      setFile(reader.result);
    };

    reader.onerror = function() {
      console.log(reader.error);
    };
  }

  return (
    <>
    <div className="container">
      <a href="https://downsub.com/">https://downsub.com/</a><br />
      <a href="https://youtube.com/">https://youtube.com/</a><br />
      <br />
      <input type="file" onChange={(e) => readFile(e)}
      />
      <p>{file}</p>
    </div>
    </>
  )
}

export default App
