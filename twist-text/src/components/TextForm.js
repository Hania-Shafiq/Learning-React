import React, { useState } from 'react';

export default function TextForm(props) {
const [text, setText] = useState('');

const handleUpClick = () => {
  let newText = text.toUpperCase();
  setText(newText);
}
const handleloClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
}
const clearClick=()=>{
    let newText = "";
    setText(newText);
}

const handleOnChange = (event) => {
  console.log("On change");
  setText(event.target.value);
}

return (
  <>
  <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3 my-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
    </div> 
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to upper case</button>
    <span>   </span>
    <button className='btn btn-primary' onClick={handleloClick}>Convert to lower case</button>
    <span>   </span>
     <button className='btn btn-primary' onClick={clearClick}>Clear</button>
  </div>
  
  <div className='container my-3'>
    <h1>Your texxt summary</h1>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>

  </>
);
}
