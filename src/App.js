import React from 'react';
import SignUp from './compounds/SignIn/SignUp';
import SignIn from './compounds/SignIn/SignIn';
import Welcome from './compounds/UI/Welcome';
import ForgotPassword from './compounds/Pages/ForgotPassword';
import  { Route } from 'react-router-dom';
 
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
    </div>
  );
}

export default App;
