// import logo from './logo.svg';
import './App.css';

const data = <span>All good</span>;
const flash=()=>{
  alert('Hey');
}
function App() {
  return (
    <div className="App">
      <h>Hi Hello Keyur this side!,{data}</h>
      <button onClick={flash}>Click me</button>
    </div>
  );
}

function App2(){
  return(
    <p>This is second component</p>
  )
}
export default App;

