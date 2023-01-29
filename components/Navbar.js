// imr
// import React, {useState} from 'react';

// impt
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




// rfc-reactFunctionComponent
export default function Navbar(props) {

  return (
   <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${ props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="btn_dark_mode" onClick={props.toggle_mode}/>
  <label className= "form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
</div>
      <div className="btn_group_color">
  <input className="" type="button" value="red" id="red" onClick = {props.handleColor}/>
  <input className="" type="button" value="green" id="green" onClick ={
props.handleColor}
  />
 
</div>
    </div>
  </div>
</nav>
  )
}


// with properties we have another thing called popTypes--
// it is recommended to define propTypes for the properties

Navbar.propTypes = {
title: PropTypes.string,

// we can also make the title as mandatory(if no default value is set)--
// title: PropTypes.string.isRequired

}


Navbar.defaultProps = {
title: 'set title here'

}



// Note that the error will be visible in the console.
/* more types:--
 optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // An array of a certain type 
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  */

//  Note study all the types carefully from react docs..its mandatory to learn
