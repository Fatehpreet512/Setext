import React,{useState} from 'react'

export default function Textform(props) {
    

    const [text, setext] = useState('Enter text here');
   
     const handleUpClick=()=>{
         console.log("Uppercase was clicked");
         setext(text.toUpperCase());
     }

     const handlelowClick=()=>{
        setext(text.toLowerCase());
    }

    const handleclearClick=()=>{
        setext('');

    }

     const handleOnChange=(event)=>{
         //console.log("On change");
         setext(event.target.value);
     }
     const extraspace=()=>{
         setext(text.split(/[ ]+/).join(' '));
     }
    return (
        <>
        <div>
           
<div className="mb-3" style={{color:props.mode==='dark'?'white':'#5c7394'}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="15" value={text} style={{backgroundColor:props.mode==='light'?'white':'#5c7394',color:props.mode==='dark'?'white':'#5c7394'}}></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear</button>
<button className="btn btn-primary mx-2 my-2" onClick={extraspace}>Remove extra spaces</button>


        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#5c7394'}}>
            <h3>Summary</h3>
            <p>{text.length} Letters and {text.split(' ').length} Words</p>
            <p>Avg time to read the text(In Minutes):{text.split(' ').length * 0.008}</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:'Enter some text to preview it'}</p>
        </div>
        </>
    )
}

