import { useState } from 'react';
import './index.css';
import Number from './components/Number';

function App() {

  let numbers = [];

  function randomSize(){
    
    let random = `${Math.floor(Math.random()*900)}px`;

    return {
      position: "relative",
      left: random,
      right: random,
      top: random,
      bottom: random,
      width: random,
      height: random,
      fontSize: random,
      color:"blue"
    }

  };

  for (let index = 1; index <= 100; index++) {
    numbers.push(index);
  }

  return (
    <div className="App">  

    <div className="circle">
      +
    </div>

      {
        numbers.map((number) => {
          return <Number key = {number} randomSize = {randomSize} content={number}/>
        })
      }   
    </div>
  );
}

export default App;
