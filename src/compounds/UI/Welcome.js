import React from 'react'
import classes from '../Style/Welcome.module.css';
import Button from './Button'
function Welcome() {
  return (
    <>
    <div className={classes.div}>
    <div>
     <h1>
       Welcome to the page
      </h1>
    </div>
    <p>Please Complete your profile</p>
    </div>
    </>
    
  )
}

export default Welcome;
