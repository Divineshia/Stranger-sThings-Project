import {Routes,Route} from 'react-router-dom';
import Posts from './components/Posts';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css'
import SignupForm from './components/SignupForm';
import AddNewPost from './components/AddNewPost';
import EditPost from './components/IsAuthor/EditPost';
import { useState } from 'react';
import useToken from './components/useToken';


function App() {
  const[token,setToken]= useState(null);
  // if(!token){
  //   return <Login setToken ={setToken}/>
  // }
console.log(token);
  return (
    <>
    
    <Routes>
      <Route path ='/' element ={<Login setToken={setToken} token={token}/>}/>
      <Route path ='/posts' element ={<Posts token={token}/>}/>
      <Route path ='/profile' element ={<Profile token={token}/>}/>
      <Route path ='/register' element ={<SignupForm setToken={setToken} />}/>
      <Route path ='/posts/add' element ={<AddNewPost token={token}/>}/>
      <Route path ='/posts/edit' element ={<EditPost token={token}/>}/>
      </Routes>
    </>
  )
}

export default App
