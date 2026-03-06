import { useState } from "react";
import usePasswordStore from "../store";




function GeneratedPassword() {
  const {
    length,
    setLength,
    includeNumbers,
    includeSymbols,
    toggleNumbers,
    toggleSymbols,
    includeUppercase,
    toggleUppercase,
    includeLowercase,
    toggleLowercase,
    generatedPassword,
    generatePassword
  } = usePasswordStore();

  const [copied, setCopied]=useState();

  const handleGeneratePassword=()=>generatePassword();

  const copyToClipboard=async()=>{
    if(!generatedPassword) return;
    await navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(()=>setCopied(false),1000)
  };

  return (
    <div className="lg:p-12 p-10 lg:w-[500px] lg:h-[600px] w-3/4 h-1/2 lg:mt-16 mt-8 border-1 mx-auto bg-gray-50 shadow-2xl rounded-lg">
      <h1 className="text-2xl font-bold my-4 mb-10 text-center">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="length" className="block text-sm font-semibold text-gray-700">Password Length:</label>
          <input type="number" id="length" min={4} max={20} value={length} onChange={(e) => setLength(+e.target.value)}
            className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500" />
        </div>
        <div className="flex items-center">
    <input type="checkbox" checked={includeNumbers} onChange={toggleNumbers} />
    <label className="ml-2 text-sm">Include Numbers</label>
        </div>
        <div className="flex items-center">
    <input type="checkbox" checked={includeSymbols} onChange={toggleSymbols} />
    <label className="ml-2 text-sm">Include Symbols</label>
        </div>
        <div className="flex items-center">
    <input type="checkbox" checked={includeUppercase} onChange={toggleUppercase} />
    <label className="ml-2 text-sm">Include Uppercase Letters</label>
        </div>
        <div className="flex items-center">
    <input type="checkbox" checked={includeLowercase} onChange={toggleLowercase} />
    <label className="ml-2 text-sm">Include Lowercase Letters</label>
        </div>
        <button onClick={handleGeneratePassword} className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Generate Password</button>
      {generatedPassword && (
        <div className="mt-4 p-4 rounded-lg border border-gray-200 bg-gray-100 flex justify-between items-center ">
          <span className="text-balance break-all">{generatedPassword}</span>  
          <button onClick={copyToClipboard} className="hover:cursor-pointer ">
            {copied? "Copied ✓" : "Copy"}
          </button>
        </div>
        
      )}

      </div>
    </div>
  )
}

export default GeneratedPassword;