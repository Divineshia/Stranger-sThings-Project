import {Routes,Route} from 'react-router-dom';
import Posts from './components/Posts';
import Login from './components/Login';
import Profile from './components/Profile';
import SignupForm from './components/SignupForm';
import AddNewPost from './components/AddNewPost';
import ViewPost from './components/IsAuthor/ViewPost';
import EditForm from './components/IsAuthor/EditForm';
import Message from './components/IsAuthor/Message';
//import ViewPost from './components/IsAuthor/test';
import './App.css'
import { useState } from 'react';



function App() {
  const[token,setToken]= useState(null);
//console.log(token);
  return (
    <>
    
    <Routes>
      <Route path ='/' element ={<Login setToken={setToken} token={token}/>}/>
      <Route path ='/posts' element ={<Posts token={token}/>}/>
      <Route path ='/profile' element ={<Profile token={token}/>}/>
      <Route path ='/register' element ={<SignupForm setToken={setToken} />}/>
      <Route path ='/posts/:id' element ={<ViewPost token={token}/>}/>
      <Route path ='/posts/:id/edit' element ={<EditForm token={token}/>}/>
      <Route path ='/posts/:id/messages' element ={<Message token={token}/>}/>
      <Route path ='/posts/add' element ={<AddNewPost token={token}/>}/>
      
      
      
      </Routes>
    </>
  )
}

export default App
