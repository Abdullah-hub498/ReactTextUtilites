import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState('');

    const handleUpperClick=()=>{
        console.log("Click on handleUpperClick"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleChange=(event)=>{
        console.log("Click on handleChange");
        setText(event.target.value);
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClear=()=>{
        let newText=('');
        setText(newText);
    }
    return (   
        <div>
             <h1  style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
             <div className="mb-3" > 
             <textarea className="form-control" value={text} id="myBox" onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} rows="8"></textarea>
             </div>
             <button type="button" className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert To Upper Case</button>
             <button type="button" className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lower Case</button>
             <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
             {/* <button type="button" className="btn btn-primary mx-2" onClick={handleCapitalCase}>Capital Case</button> */}
             <div className="container my-3"  style={{color: props.mode==='light'?'black':'white'}}>
                 <h1>Your Text Summery</h1>
                 <p>{text.split(" ").length} words and {text.length} characters</p>
                 <p>{0.008*text.split(" ").length} Mintues required to read</p>
                 <h2>Preview</h2>
                 <p>{text.length>0?text:"Enter Text To Preview"}</p>
             </div>
        </div>
    )
}
