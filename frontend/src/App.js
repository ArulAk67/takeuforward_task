import React, { useState } from 'react';
import axios from 'axios';

function CodeEditor() {
  const [language_id, setLanguage] = useState('');
  const [source_code, setCode] = useState('');
  const [stdin, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [token, setToken] = useState('');

  const compileCode = async () => {
    try {
      const response = await axios.post('http://localhost:5500/ide/post', {
        language_id,
        source_code,
        stdin,
      });
      setToken(response.data.token);
      setOutput(`Compilation successful. Token received: ${response.data.token}`);
    } catch (error) {
      setOutput(`Error during compilation: ${error.message}`);
    }
  };

  const runCode = async () => {
    try {
      const response = await axios.get(`http://localhost:5500/ide/get/${token}`);
      console.log(response);
      setOutput(`Output: ${response.data}`);
    } catch (error) {
      setOutput(`Error while running code: ${error.message}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Language"
        value={language_id}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Code"
        value={source_code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <br />
      <textarea
        placeholder="Sample Input"
        value={stdin}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <br />
      <button onClick={compileCode}>Compile</button>
      <button onClick={runCode}>Run</button>
      <br />
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CodeEditor;
