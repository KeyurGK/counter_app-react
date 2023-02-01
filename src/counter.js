import React,{useState} from 'react'
let i ='00';
export default function Practise() {
const[name,setName]=useState(i);

const stateIncrement=()=>{
    i++;
    setName(i);
    
}
const stateDecrement=()=>{
    if(i>0){
    i--;
    setName(i);
    }
    else{
        alert('That is enough, there is more fun at the Top!');
    }
}
const reset =()=>{
    i=0;
    setName(i);
}
  return (
    <div className="data">
    <h1 className="title">Counter</h1>
    <p>{name}</p><br/>
    <button className="inc" onClick={stateIncrement}>+</button>
    <button className="dec" onClick={stateDecrement}>-</button><br/>
    <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}
