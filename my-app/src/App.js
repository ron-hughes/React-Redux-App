import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import  Display  from './components/display'

function App() {

  useEffect(() => {
      axios.get('https://www.breakingbadapi.com/api/character/random')
      .then( res => {console.log(res.data[0].img)})
  }, [])
 
  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
