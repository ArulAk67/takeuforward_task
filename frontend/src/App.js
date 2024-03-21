import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CodeEditor() {
  const [language_id, setLanguage_id] = useState(null);
  const [language, setLanguage] = useState("");
  const [source_code, setCode] = useState('');
  const [stdin, setInput] = useState('');
  const [output, setOutput] = useState('THE OUTPUT WILL BE DISPLAYED HERE!');
  const [token, setToken] = useState('');

  const compileCode = async () => {
    try {
      const response = await axios.post('https://takeuforward-backend.vercel.app/ide/post', {
        language_id,
        source_code,
        stdin,
      });
      setToken(response.data.token);
      setOutput(`Token received: ${response.data.token}`);
    } catch (error) {
      setOutput(`Error during compilation: ${error.message}`);
    }
  };

  const runCode = async () => {
    try {
      const response = await axios.get(`https://takeuforward-backend.vercel.app/ide/get/${token}`);
      console.log(response);
      setOutput(`Output: ${response.data}`);
    } catch (error) {
      setOutput(`Error while running code: ${error.message}`);
    }
  };

  const handleLanguageChange = (e) => {
    const languageIds = {
      "Java": 91,
      "JavaScript": 93,
      "C": 50,
      "C++": 53,
      "Python": 71,
    };  
    // setLanguage(languageIds[e.target.value]);
    setLanguage(e.target.value);
    setLanguage_id(languageIds[e.target.value]);
    // console.log(language_id);~
  };

  return (
    <>
     <div className='flex items-center justify-center text-xl h-screen bg-black font-medium w-full'>
        <div className='w-1/2 mx-12 flex flex-col justify-center gap-2 h-full'>
          <h1 className='text-3xl italic text-white my-5 underline'>Code Editor</h1>
            <label className=' text-white font-bold italic '>Programming Language :</label>
          <div className='input'>
            <select
              className='w-full text-black'
              value={language}
              onChange={handleLanguageChange}>
              <option value="">Select Language</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="C">C</option>
              <option value="C++">C++</option>
            </select>
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
            <button onClick={compileCode} className='btn hover:bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm
           shadow-slate-100 italic font-medium hover:text-black'>Get Token</button>
            <button onClick={runCode} className='btn hover:bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm
           shadow-slate-100 italic font-medium hover:text-black'>Run</button>
          </div>
        </div>
        <div className='w-1/2 py-5 px-5 mx-12 flex flex-col h-3/4 my-3 gap-4'>
          <div className=' text-white border border-solid rounded-2xl h-3/4 border-white shadow-lg shadow-slate-200'>
            <h3 className=' underline italic text-2xl mx-5 my-3'>Output:</h3>
            <pre className=' text-cyan-300 my-5 mx-5 font-sans'>{output}</pre>
          </div>
          <div className='text-white my-16'>
          <Link to="/tables" className=' border border-solid border-white px-5 py-5 text-center 
          rounded-xl hover:bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm
           shadow-slate-100 italic font-medium hover:text-black'>
              View Previous Entries!
            </Link>
          </div>
        </div>
    </div>
    </>
  );
}

export default CodeEditor;
