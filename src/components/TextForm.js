 import React, { useState } from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase!","success");
    };

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowerrcase!","success");

    };

    const handleSentenceClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Converted To Sentence Case!","success");

    };

    const handleCapitalizedClick = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
        props.showAlert("Converted To Capitalized Case!","success");

    };

    const handleInverseClick = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toLowerCase()) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
        props.showAlert("Converted To Inverse Case!","success");

    };

    const handleTitleClick = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
        props.showAlert("Converted To Title Case!","success");

    };

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!","success");

    };

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!","success");

    }

    const handleRemoveSpaceClick = () => {
        let newText = text.replace(/\s{2,}/g, " ");
        setText(newText);
        props.showAlert("Extra Spaces Removed!","success");
    };
    
    

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>      
            <div className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 className='heading'> {props.heading}</h1>
                    <div className='mb-3'>
                        <textarea
                            className='form-control' id='mybox' onChange={handleOnChange} rows='8' value={text}
                             style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} >
                        </textarea>
                    </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpperClick}> UPPERCASE</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLowerClick}> lowercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleSentenceClick}> Sentence Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCapitalizedClick}> Capitalized Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleInverseClick}> InVeRsE CaSe</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleTitleClick}> Title Case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleRemoveSpaceClick}>Remove Spaces</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}> Copy text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}> Clear</button>

            </div>
            <div className='container my-4'  style={{color:props.mode==='dark'?'white':'black'}}>
            <h2> Your Text Summary</h2>

            <p>
                {text.split(/\s+/).filter((word) => {return word !== ''}).length} words and{' '}
                {text.length} characters
            </p>

            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>

            <h2>Preview</h2>
            <div className='containerpreview'>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</div>
            
           </div>
           </>      
    );
}
