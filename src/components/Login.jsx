import {Link} from 'react-router-dom';
import { useState } from 'react';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';


const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



function Login({setToken, token}){
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
const [successMessage, setSuccessMessage] = useState("");
const [error, setError] = useState(null);
const navigate =useNavigate();

async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users/login`,
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
      console.log("Login Result: ", result);
      const Token =result.data.token
      console.log(Token);
      console.log(setToken);
      setToken(Token);
      //console.log(token);
      setSuccessMessage(result.data.message);
      setUsername("");
      setPassword("");
      //authenticate(token);
      

    } catch (error) {
      setError(error.message);
    }
  }
  //console.log(token);
  
//Authentication on submitting
  // async function authenticate(token) {
  //   try {
  //     const response = await fetch(
  //       `${BASE_URL}/someEndPoint`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({ 
  //           user:{
  //               username,
  //               password,
  //           }
  //           /* whatever things you need to send to the API */ })
  //       });

  //     const result = await response.json();
  //     console.log("Authenticate Result: ", result);
  //     setSuccessMessage(result.message);
  //     {token && <Profile/>}
  //   } catch (error) {
  //     setError(error.message);
  //   }
  
  // }



    return (<>
     
     <div id ='navbar'>
     <h3> STRANGER'S THINGS</h3>
    
        <h3 onClick={()=>navigate ("/")}>HOME</h3>
        <h3 onClick={()=>navigate ("/posts")}>POSTS</h3>
        <h3 onClick={()=>navigate ("/register")}>SignUp</h3>
       </div>
      
    
    <div className='Login'>
        <h2>LOG IN</h2>
        {/* {successMessage && <div>
          <p>{successMessage}</p>
        {navigate ("/profile")}</div>}
        {error && <p>{error}</p>} */}
        <form className='form' onSubmit ={handleSubmit}>
            <label>Username:{" "}
            <input value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <label>Password:{" "}
            <input type='password' value={password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
           <button >LOG IN</button>
           <Link to='/register'>Don't have an account? Sign Up</Link>
           

        </form>
        
        </div>
        </>
    )
}
export default Login
