import React, { useState } from 'react';
import axios from 'axios';

function CodeEditor() {
  const [language_id, setLanguage] = useState('');
  const [source_code, setCode] = useState('');
  const [stdin, setInput] = useState('');
  const [output, setOutput] = useState('THE OUTPUT WILL BE DISPLAYED HERE!');
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
    <>
     <div className='flex items-center justify-center text-xl h-screen bg-black font-medium w-full'>
        <div className='w-1/2 mx-12 flex flex-col justify-center gap-2 h-full'>
          <h1 className='text-3xl italic text-white my-5 underline'>Code Editor</h1>
            <label className=' text-white font-bold italic '>Programming Language :</label>
          <div className='input'>
            <input
              className='w-full text-black'
              type="text"
              placeholder="Language"
              value={language_id}
              onChange={(e) => setLanguage(e.target.value)}
              />
          </div>
            <label className=' text-white font-bold italic '>Enter the Code</label>
          <div className='input'>
            <textarea
              className='h-64 w-full text-black'
              placeholder="Code"
              value={source_code}
              onChange={(e) => setCode(e.target.value)}
              ></textarea>
          </div>
            <label className=' text-white font-bold italic '>Sample Input</label>
          <div className='input'>
            <textarea
              className='w-full text-black'
              placeholder="Sample Input"
              value={stdin}
              onChange={(e) => setInput(e.target.value)}
              ></textarea>
          </div>
          <div className='button'>
            <button onClick={compileCode} className='btn'>Compile</button>
            <button onClick={runCode} className='btn'>Run</button>
          </div>
        </div>
        <div className='w-1/2 h-3/4 border  py-5 px-5 border-solid rounded-3xl border-white mx-12'>
          <div className=' rounded-lg text-white'>
            <h3 className=' underline italic text-2xl'>Output:</h3>
            <pre className=' text-green-400 my-5'>{output}</pre>
          </div>
        </div>
    </div>
    </>
  );
}

export default CodeEditor;
