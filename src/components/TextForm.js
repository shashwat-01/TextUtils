import React,{useState} from 'react'



export default function TextForm(props) {
    const[text, setText]=useState(''); 

    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleExtraSpaces= ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy= ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }

    const handleClearClick= (event)=>{
      setText(event.target.value);
    }

    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'#f5f5f5':'black'}}>
      
        <h2>{props.heading}</h2>
        <div className="mb-3">
        
        <textarea className="form-control border-0 my-3" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#333333':'#f5f5f5',color: props.mode==='dark'?'#f5f5f5':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'#f5f5f5':'black'}}>
      <h2>Your text summary</h2>
      <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</b> and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text in textbox to preview..."}</p>
    </div>
    </>
  )
}
