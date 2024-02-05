import React, {  useEffect, useState } from 'react';

import './App.css';

// http://api.adviceslip.com/advice .
function App() {

  const[advice,setAdvice]=useState(null)

  const fetchAdvice= async () =>{
    var requestOptions={
      method:"GET",
      redirect:"follow"
    }
     await fetch(" http://api.adviceslip.com/advice",requestOptions)
     .then((response) => response.json()
      ).then(res =>{
        console.log("test",res.slip.advice);
        setAdvice(res.slip.advice)
      });
  };

  useEffect(()=>{
    fetchAdvice();
  },[]);
  return (
    <div className="App">
      <div className="card">
        <button className='button'onClick={()=>{fetchAdvice();}}>Give me Advice</button>
        <p className='cubed'>{advice}</p>
      </div>
    </div>
  );
}

export default App;
