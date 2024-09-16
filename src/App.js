import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { applyNumber, changeOperation, clearDisplay } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (input) => {
    return dispatch(applyNumber(parseInt(input.target.innerHTML)))
  };

  const handleChangeOperation = (operator) => {
    return dispatch(changeOperation(operator.target.innerHTML))
  }

  const handleClearDisplay = () =>
  {
    return dispatch(clearDisplay())
  }
 
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={1}/>
              <CalcButton onClick={handleApplyNumber} value={2}/>
              <CalcButton onClick={handleApplyNumber} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={4}/>
              <CalcButton onClick={handleApplyNumber} value={5}/>
              <CalcButton onClick={handleApplyNumber} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={7}/>
              <CalcButton onClick={handleApplyNumber} value={8}/>
              <CalcButton onClick={handleApplyNumber} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleChangeOperation} value={"+"}/>
              <CalcButton onClick={handleChangeOperation} value={"*"}/>
              <CalcButton onClick={handleChangeOperation} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
