import React from 'react'
import classes from '../Style/Welcome.module.css';
import Button from './Button'
function Welcome() {
  return (
    <>
    <div className={classes.div}>
    <div>
      Welcome to the page
    </div>
    <Button>Please Complete your profile</Button>
    </div>
    </>
    
  )
}

export default Welcome;
