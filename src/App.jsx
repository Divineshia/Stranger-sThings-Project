import {Routes,Route} from 'react-router-dom';
import Posts from './components/Posts';
import Login from './components/Login';
import Profile from './components/Profile';
import { useState } from 'react';

import './App.css'
import SignupForm from './components/SignupForm';

function App() {
  const [token, setToken] = useState(null);
  

  return (
    <>
    
    <Routes>
      <Route path ='/' element ={<Login/>}/>
      <Route path ='/posts' element ={<Posts/>}/>
      <Route path ='/profile' element ={<Profile/>}/>
      <Route path ='/register' element ={<SignupForm token={token} setToken={setToken}/>}/>
      <Route path ='/login' element ={<Login token={token} setToken={setToken}/>}/>
      </Routes>
    </>
  )
}

export default App
