import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!" , "success");
    }

    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!" , "success");
    }

    const clear=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!" , "success");
      }

      const replaceAll = () => {
        var a = prompt("Replace this : ");
        var b = prompt("With this : ");

        let newText = text.replaceAll(a, b);
        setText(newText);
        props.showAlert(`${a} is Successfully replaced with ${b}` , "success");
      }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        const toogle = document.getElementById("toggle");
        if ((toogle.textContent === "Text to Speech")) {
          window.speechSynthesis.speak(msg);
          toogle.textContent = "Please Stop";
        //   console.log("play");
        } else {
          toogle.textContent = "Text to Speech";
          window.speechSynthesis.cancel();
        //   console.log("stop");
        }
      };

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard!" , "success");
    }
    
    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "New Text"; //wrong way to change text
    // setText("new text");//correct wat to change text using function settext
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2 className='mb-4'>{props.heading}</h2>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#37393b':'white' , color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
                </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button> 
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
                    <button disabled={text.length===0}  onClick={speak} className="btn btn-primary mx-2 my-2" id="toggle" style={{width: '150px'}} > Text to Speech</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text
                    </button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={replaceAll} >Replace Word</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-3' onClick={handleCopy}>Copy Text</button>
                    
            </div>
            <div className="container my-4"  style={{color: props.mode ==='dark'?'white':'black'}}>
                <h3>Your Text Summary</h3>
                {/* <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
                {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words and {text.length} Characters</p> */}
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read </p>
                <h3 className='mt-4'>Preview</h3>
                <p>{text.length>0 ? text : "Nothing to Preview!"}</p>
            </div>

        </>
    )
}
