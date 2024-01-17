import { useEffect, useState } from 'react'
import './App.css';

function App() {
   //useState 
  const [counter, setCounter] = useState(0);
  //UseEffect
  useEffect(() =>{
    alert('You have change '+ counter)
    //setCounter(100)
  },[counter]);  
  
  return (
    <div classNmae="App">
      <center>
      <h1>Counter button Where set min = 0 and max= 20</h1>
       <button onClick={() => { if(counter >0) {setCounter((prevCount)=> prevCount-1)}}}>-</button>
       <h1>{counter}</h1>
       <button onClick={() => {if(counter < 20){setCounter((prevCount)=> prevCount+1)}}}>+</button>
      </center>
    </div>
  );
}

export default App;
