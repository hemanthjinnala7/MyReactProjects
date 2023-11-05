import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css'

let root = ReactDOM.createRoot(document.getElementById('root'));


function Hello() {

  return (
    <>
      <div className='main-bg'>
        <div className='bg-container'>
          <h1 className="form-heading">Hemanth's Login Form</h1>
          <div >
            <input  
              className="input-box"
              type="text" placeholder = "enter your mail">
            </input>
          </div>
          <div >
            <input  
              className="input-box"  type="text" placeholder = "enter your password"> 
            </input>
          </div>
          <div className="flexx" >
            <button className = "btn danger-button">SIGN IN</button>
          </div>

        </div>
      </div>
    </>
    
  )
}

root.render(<Hello/>)

