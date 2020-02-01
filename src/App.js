import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState({
    number: '' 
  });

  const [fstate, fsetState] = useState({
    result: '' 
  });


  const inputValue = (event)=>{
    setState({[event.target.name]:event.target.value});
  }

  const calculateFactorial = (event)=>{
    const number = state.number;
    
    let result = 1;
    for(let i =1; i<=number; i++) result*=i;
    fsetState({result: result});

    event.preventDefault();
  }

  const style = {
    width: "350px"
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Factorial Calculator</h2>
        <form onSubmit={inputValue}>
          <input style={style} type="number" className="form-control" placeholder="Enter a number..." name="number" value={state.number} onChange={inputValue}/>
          <br/><button className="btn btn-info" onClick={calculateFactorial}>Calculate Factorial</button>
        </form>

        <h4>Factorial: {fstate.result}</h4>
      </header>
    </div>
  );
}

export default App;