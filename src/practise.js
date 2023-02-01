import React,{useState} from 'react'
let i =0;
export default function Practise() {
const[name,setName]=useState(i);

const stateIncrement=()=>{
    i++;
    setName(i);
    
}
const stateDecrement=()=>{
    i--;
    setName(i);
    
}
const reset =()=>{
    i=0;
    setName(i);
}
  return (
    <div>{name}
    <button onClick={stateIncrement}>+</button>
    <button onClick={stateDecrement}>-</button>
    <button onClick={reset}>Reset</button></div>
  )
}
