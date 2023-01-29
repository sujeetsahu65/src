
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  // Switch, deprecated now its Routes
  Routes,
  Route,
  Link
} from "react-router-dom";

// let name = 'rohan';
// name = <div>sujeet</div>;

// document.getElementsByClassName('submit').addEventListener('click', function(){
//   alert('hey')
// })

function App() {

    const [mode, setMode] = useState('light');
    const [modeText, setModeText] = useState('Dark Mode Disabled');
//     const [alert, setAlert] = useState({
//   msg:'1',
//   type:'success'
// });

    const [alert, setAlert] = useState(null);
    // but if i use null it will show that cannot read property of a null
    // so if you dont wanna put the default value(which is obvious in alert case) then you can use jsx's if else in the before alert html see in alert.js


const handleAlert= (msg,type)=>{
// setAlert(msg);
// but we also wanna type to be dynamic so we use object

setAlert({
  msg:msg,
  type:type
});

setTimeout(() => {
  setAlert(null)
}, 1800);
}

const toggle_mode= ()=>{
if(mode === 'light'){
  setMode('dark')
  setModeText('Dark Mode Enabled')
}
  else{
    setMode('light');
  setModeText('Dark Mode Disabled')
  }
}

const handlePost= ()=>{
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();
xhr.onload = function(data){
 if (this.status === 200) {
console.log(data);
  handleAlert(
  "data has been received successfully",
    'success'
  )

  } else {

     handleAlert(
  "Something went wrong",
    'danger'
  )
  }
}
}

const handleColor = ()=>{
// document.querySelector('body').style.backgroundColor = this.getAttribute('id');
// console.log(this);
// alert(ele)
document.querySelector('.btn_color').addEventListener('click', handleColor)
}

  return (
  <>
     <Router>
  <Alert alert={alert}/>
  <Navbar link1 ="Home" mode={mode} toggle_mode={toggle_mode} modeText={modeText}/>
  <div className='container'>

 {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
       <Form  handlePost={handlePost} handleColor = {handleColor}/>
          </Route>
        </Switch> */}
        {/* now  */}

        <Routes>

        <Route exact path="/" element = {
       <Form  handlePost={handlePost} handleColor = {handleColor}/>}/>

        <Route exact path="/about" element = {
       <About/>}/>
       
</Routes>


  </div>
</Router>
</>

  );
}

export default App;
