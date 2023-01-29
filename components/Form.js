import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Write your comment here..");

  const onchang_funct = (e) => {
    setText(e.target.value);

    // also
    // setText(e.target.value.toUpperCase());
  };

  const onclick_func = (e) => {
    setText(text.toUpperCase());
  };

    let light_mode= {
  color: 'black',
  backgroundColor:'white'
    }

    let dark_mode= {
  color: 'white',
  backgroundColor:'black'
    }

  //  const [style, setStyle] = useState({color:'white', backgroundColor:'black'});
  const [style, setStyle] = useState(light_mode);
  const [btn_toggle, setbtn] = useState('Dark Mode');

  const toggle_style = () => {
    if (style.color === "black" && style.backgroundColor === "white") {
      setStyle(dark_mode);

      setbtn('Light Mode');
      // document.querySelectorAll('.btn_turn_mode').forEach(function(element, i){
      //   element.innerText ='Light Mode';
      // });
    
    } else {
      setStyle(light_mode);
      setbtn('Dark Mode');
    // document.querySelectorAll('.btn_turn_mode').forEach(function(element, i){
    //   element.innerText ='Dark Mode';
    //   });
    }
    // setStyle(my_style)
  };


const handleCopy = ()=>{
  let text = document.getElementById('my_text_area')
  text.select();
  navigator.clipboard.writeText(text.value)
  // alert(text);
  console.log(text);
}







  return (
    <>
      <div className="container" style={style}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="my_text_area"
            value={text}
            onChange={onchang_funct}
            rows="3"
          ></textarea>
        </div>
        <button className="btn_turn_upper" onClick={onclick_func}>
          Change the text to uppercase
        </button>
        <button className="btn_turn_mode" onClick={toggle_style}>
         {btn_toggle}
        </button>
        <button className="btn_turn_mode">
           {btn_toggle}
        </button>
        <button className="btn_select" onClick={handleCopy}>
           Select&Copy Text
        </button>
        <button className="btn_post" id="btn_post" onClick={props.handlePost}>
           Make A Post Rrequest
        </button>
      </div>

      <div className="container">
        <div>
          Words count:{text.split(" ").length}, and characters count:
          {text.length}
        </div>
      </div>
    </>
  );
}
