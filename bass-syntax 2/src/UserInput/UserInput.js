import React from 'react';


const UserInput = (props)  => {
  const inputStyle ={  
    border: '2px solid grey' ,
    margin: '30px auto'
  }
    return (
    <input type='text' style={inputStyle} onChange = {props.changed} value= {props.currentname}/>
    )    
    };
    
    export default UserInput; 