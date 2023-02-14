// import logo from './logo.svg';
import './App.css';
import Practise from './Practise'
import React, {useState,useEffect} from 'react';
const API_URL='https://api.chucknorris.io/jokes/random';

function App() {
  // const[joke, setJoke] = useState('The joke will display here');

  // const flash=()=>{
  //   fetch(API_URL)
  //   .then(res => res.json())
  //   .then(data => setJoke(data.value));
  // }

  // useEffect(()=> {
  //  flash();
  // },[]);
  return (
    <Practise num="1000"/>
    // <div className="jokes">
    //   <h1>Joke Generator</h1>
    //   <p>{setJoke}</p>
    //   <button onClick={flash}>Generate new Joke😂</button>
    // </div>
  );
}


export default App;

