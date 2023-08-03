import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



export default function SignupForm({token,setToken}){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState(null);
    const navigate =useNavigate();

    

    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
          const response = await fetch(`${BASE_URL}/users/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user:{
                    username,
                password, 
            }}),
            }
          );
          const result = await response.json();
          console.log("Signup Result: ", result);
          setToken(result.data.token);
          setSuccessMessage(result.data.message);
          setUsername("");
          setPassword("");
          //authenticate(token);
          
        } catch (error) {
          setError(error.message);
        }
      }
console.log(token);
     
    

    return (
        <>
        <div id ='navbar'>
        <h3> STRANGER'S THINGS</h3>
            <h3 onClick={()=>navigate ("/")}>LOGIN</h3>
            <h3 onClick={()=>navigate ("/")}>HOME</h3>
              
              </div>
              
           
            <div className='Signup'>
               <h2>New User</h2>
               {successMessage && <p>{successMessage}</p>}
               {error && <p>{error}</p>}
               <form className='form'onSubmit ={handleSubmit} >
                   <label>Username:{" "}
                   <input value={username}
                   onChange={(e)=>setUsername(e.target.value)}/>
                   </label>
                   <label>Password:{" "}
                   <input type='password' value={password}
                   onChange={(e)=>{setPassword(e.target.value)}}/>
                   </label>
                  <button>Register</button>
                  
       
               </form>
               </div>
       
               </>
           )
}
