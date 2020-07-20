import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
  
  const [InputState, setInputState] = useState({
      
    IceCreamName:'Chocolate'

  })
  const namechangeHandlder = (event) => {

setInputState({

  IceCreamName:event.target.value

})

  }
  return (
    <div className="App">


   <UserInput  changed = {namechangeHandlder} currentname = {InputState.IceCreamName}/>

   <UserOutput IceCreamName={InputState.IceCreamName} />
   <UserOutput IceCreamName={InputState.IceCreamName}/>
   <UserOutput IceCreamName='vanilla '/>



    </div>
  );
}

export default App;
