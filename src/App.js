import logo from './logo.svg';
import './App.css';
import SystemsContainer from "./components/SystemsContainer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { useState, useEffect } from 'react';
import Home from './components/Home';

function App() {

  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [toggleAuth, setToggleAuth] = useState(false)

  if (!user) {
      return (toggleAuth && <Login setUser={setUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>) || (<Signup setUser={setUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>)
      // <Signup />
  }
  return (
    <div className="App">

      <h1>{message}</h1>
      <Home />
    </div>
  );
}

export default App;
