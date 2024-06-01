import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length,setLength] = useState(8);
  const [includeupper,setIncludeUppercase]=useState(true);
  const [includelower,setincludeLowercase]=useState(true);
  const [includenumber,setincludeNumber]=useState(true);
  const[includesymbols,setincludeSymbols]=useState(true);
  const[password,setPassword]=useState("");


const generatepassword = ()=>{
  let charset = "";
  if(includeupper) charset +='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if(includelower) charset +='abcdefghijklmnopqrstuvwxyz'
  if(includenumber) charset += '0123456789';
  if(includesymbols) charset += '!@#$%^&*()_+=';
  console.log(charset)
  let generatedpassword = '';
  for (let i =0;i<length;i++){
    const randomIndex = Math.floor(Math.random()*charset.length)
    generatedpassword +=charset[randomIndex]
  }
  setPassword(generatedpassword);
}


const copypassword = () =>{
  navigator.clipboard.writeText(password)
}

  return (
    <>
     <div className="password-generator">
      <h2>Strong password generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length</label>
        <input type="number" id='num' value={length}  onChange={(e)=>setLength(parseInt(e.target.value))}/>
      </div>
       <div className="checkbox-group">
        <input type="checkbox" id='upper' checked={includeupper} onChange={(e)=>setIncludeUppercase(e.target.checked)}/>
        <label htmlFor="Include Uppercase">Include Upper Case</label>
       </div>
       <div className="checkbox-group" >
        <input type="checkbox" id='Lower' checked={includelower}  onChange={(e)=>setincludeLowercase(e.target.checked)}/>
        <label htmlFor="Include Lower">Include Lower Case</label>
       </div>
       <div className="checkbox-group">
        <input type="checkbox" id='numbers' checked={includenumber}  onChange={(e)=>setincludeNumber(e.target.checked)}/>
        <label htmlFor="Include Numbers">Include Numbers</label>
       </div>
       <div className="checkbox-group">
        <input type="checkbox" id='Symbols' checked={includesymbols}   onChange={(e)=>setincludeSymbols(e.target.checked)}/>
        <label htmlFor="Include Symbols">Include Symbols</label>
       </div>
       <button className='generated-btn' onClick={generatepassword}>Generate Password</button>
       <div className="generated-password">
        <input type="text"  readOnly  value={password}/>
        <button className='copy-btn'  onClick={copypassword} >Copy</button>
       </div>
     </div>
    </>
  )
}

export default App;
