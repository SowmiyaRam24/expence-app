import React from 'react';
import SignUp from './compounds/UI/SignUp';
import SignIn from './compounds/UI/SignIn';
import Welcome from './compounds/UI/Welcome';
import ForgotPassword from './compounds/Pages/ForgotPassword';
import  { Route } from 'react-router-dom';
import IncompleteProfile from './compounds/Pages/Incomplete';
import Expenses from './compounds/Expence/Expenses';
 
function App() {
  return (
    <div >
      <Route path='/singUp'>
        <SignUp/>
      </Route>
      <Route path="/singIn">
       <SignIn/>
      </Route>
      <Route path='/forgotpassword'>
         <ForgotPassword/>
      </Route>
      <Route path='/Welcome'>
      <Welcome/>
      </Route>
      <Route path='/incompleteProfile'><IncompleteProfile/></Route>
      <Route path='/expence'>
        <Expenses/>
      </Route>

    </div>
  );
}

export default App;
