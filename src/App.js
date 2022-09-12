import './App.css';
import React, {useState} from 'react';
import Akeno from './images/Akeno.jpg'
import Rias from './images/Rias.jpg'
import Albedo from './images/Albedo.jpg'

function reload(event) {
  if (event.key === 'a' || event.key === 'A')
  window.location.reload();
}

function App() {
    let [akeno, setAkeno]=useState(true)
    let [rias, setRias]=useState(true)
    let [albedo, setAlbedo]=useState(true)
    let [window, setWindow]=useState(true)

  return (
    <>
    <div onKeyPress={reload}>
      <div>
        <h1>Sean's Project</h1>
        { window && (
                  <ul class = "list-group">
                      <li class="list-group-item">Your Details:</li>
                      <li class="list-group-item">Full Name: Sean Ernest B. Regala</li>
                      <li class="list-group-item">Contact No: 09054412148</li>
                      <li class="list-group-item">Email: sean@playcash.finance</li>
                  </ul>
              )}
        <button id="window" onClick={() => setWindow(!window)}>{window ? "Hide" : "Show"}</button>  
      </div>
      <div>
        <h1>Images</h1>
        { akeno && (
                  <img src={Akeno} height={300} width={300} />
              )}
              <button id="akeno" onClick={() => setAkeno(!akeno)}>{akeno ? "Hide" : "Show"}</button>
              { rias && (
                  <img src={Rias} height={300} width={300} />
              )}
              <button id="rias" onClick={() => setRias(!rias)}>{rias ? "Hide" : "Show"}</button>
              { albedo && (
                  <img src={Albedo} height={300} width={300} />
              )}
              <button id="albedo" onClick={() => setAlbedo(!albedo)}>{albedo ? "Hide" : "Show"}</button>
      </div>
    </div>
    </>
  );
}

export default App;
