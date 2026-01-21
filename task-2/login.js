// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  // Use the variables 'username' and 'password' to access the input values
  if (incorrectAttempts >= 4){
    errorMessage('Login blocked: Too many incorrect attempts');
  }
  if (username ==='admin' && password ==='Hack1234'){
    successMessage('Logged in successfully');
  }
  else if  (username ==='user' && password ==='7654321'){
    successMessage('Logged in successfully');
  }
  // Use incorrectAttempts to track the number of failed attempts
  else {
    incorrectAttempts++;
    errorMessage('Incorrect credentials');
  }
}

// Do not change the line below
export { onLogin };
