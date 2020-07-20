import React from 'react'; 

import './UserOutput.css';
const UserOutput = (props)  => {
  
    return (
    
    <div className='UserOutput'>
    
    <p>IceCreamName: {props.IceCreamName} </p>

    <p> My favourite ice cream can change anytime</p>




    </div>
  
    );

    
    };
    
    export default UserOutput; 