import React , { useRef, useState } from 'react';
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "../sigCanvas.css";
import "../App.css";


function Signature() {
  const [imageURL,setImageURL] = useState(null);
  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    
  };

  const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };

  const download = () => {
    var element = document.createElement("a");
    var file = new Blob(
      [
        imageURL
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  return (
    <div className="App">
    {imageURL ? (
        <img
          src={imageURL}
          alt="User signature"
          style={{
            margin: "0 auto",
            border: "1px solid black",
            width: "150px"
          }}
        /> ) : "Please add your signature here "}

      <div className="a">
        <br/>
      { imageURL ? 
      <a href={imageURL} download onClick={() => download()} >
        <i className="fa fa-download" /> Download you signature</a>
      : null }
      </div>

      <br/>  
      <br/>
       
      <Popup
        modal trigger={<button className="btn btn-primary">Open Writing Pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }}
            />
            <button style={buttonStyle} className="btn btn-primary" onClick={save}>Save</button>
            <button style={buttonStyle} className="btn btn-primary" onClick={clear}>Clear</button>
            <button style={buttonStyle} className="btn btn-primary" onClick={close}>Close</button>
          </>
        )}
      </Popup>   
    </div>
  );
}

export default Signature;