import React, {useEffect} from 'react';
import './App.css';
import {userRef} from "./firebase";
import signUp from "./Api/signUp";
import signIn from "./Api/signIn";

function App() {
  useEffect(() => {
    function callFunc(){
      userRef.set({
        email: "zlystevens@gmail.com",
        password: "123456"
      });
    }

    callFunc();
  },[]);

  const onSignUp = () =>{
    const result = signUp("18781099692@163.com", "654321");
    console.log(result);
  }

  const onSignIn = () =>{
    const result = signIn("18781099692@163.com", "654321");
    console.log(result);
  }

  return (
    <section>
    <div className="App">
       <button onClick={() => onSignUp()}>Sign Up</button>
    </div>
    <div className="App">
        <button onClick={() => onSignIn()}>Sign In</button>
    </div>
    </section>
  );
}

export default App;
