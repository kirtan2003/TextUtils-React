import React from 'react';

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle = {
      color: props.mode === 'dark'?'white':'#293246',
      backgroundColor:  props.mode === 'dark'?'#293246':'white'
    }

    // const [btntext , setBtnText] = useState('Enable Dark Mode');

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode');
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode');
    //     }
    // }

  return (

    <div className="container my-3">
        <h2 className="my-3" style={{color: props.mode === 'dark'?'white':'#293246'}}>About Us</h2>
      <div className="accordion accordion-flush" style = {{border: props.mode === 'dark'? '1px solid #cdcdcd': '1px solid #cdcdcd'}} id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
             <strong>About Our WebSite</strong> 
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
            <p><b>Textutils</b> is a smart Tool which provides you word/Character Count Thus it is Suitable for for Writing a paragraph with given Word Limit</p>
            <p>This is the best ever Website which helps you to analyze your text efficiently and effectively . Be it counting number of words or characters , text to speech , converting to UpperCase or LowerCase...See it in OUR SERVICES SECTION BELOW.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
             <strong> Our Services </strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
             1. Converting to Uppercase <br />
             2. Converting to Lowercase <br />
             3. Copying Text<br />
             4. Text to Speech<br />
             5. Replacing a specific words and Many More....<br />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
             This Software works in any web browsers such as Chrome , Microsoft-edge , Firefox , Safari. It is capable of counting words in pdf document , excel document , Blogs , Books etc.  
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <strong>Our Mission </strong>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
            <p className="text-center"><b>“Spread ideas.”</b></p>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button> */}
    </div>
  );
}
