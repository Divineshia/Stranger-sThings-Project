import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
//import { useParams } from 'react-router-dom';
const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
//const TOKEN= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNhYTQ4MjhlM2NhYTAwMTRiMzA5ZGUiLCJ1c2VybmFtZSI6InNoaWEiLCJpYXQiOjE2OTEwMDU5NzV9.f_5NLsfeoA-CP10RsTqLQjNR6sPNyWMaNwJ0HZAwXyI';

//console.log(token);
function Profile({token}){
    const [user,setUser]=useState({});
    const [message, setMessage] = useState('')
    const navigate =useNavigate();
    

    useEffect(()=>{
    const userProfile = async () => {
        try {
          //console.log(token);
          const response = await fetch(`${BASE_URL}/users/me`, {
            method:'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
          const result = await response.json();
          console.log('Profile result',result);
          setUser(result.data);
          setMessage(result.data.messages)
        } catch (err) {
          console.error(err);
        }
      
    }
    userProfile()
},[token])
//console.log(user);
//console.log(mydata.posts.title);
    return (<>
   
     
    <div id ='navbar'>
    <h3> STRANGER'S THINGS</h3>
            <h3 onClick={()=>navigate ("/")}>HOME</h3>
            <h3 onClick={()=>navigate ("/posts")}>POSTS</h3>
            <h3 onClick={()=>navigate ("/profile")}>PROFILE</h3>
            <h3 onClick={()=>navigate ("/")}>LOG OUT</h3>
        
       </div>
       

    <div className='Profile'>
        
        <h2>Profile Name:{user.username}</h2>
        {/* <h3>Posts:{mydata.posts.map((data)=> 
        <div className='myposts'>
           
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h5>{p.price}</h5>
            <h5>{p.location}</h5>
            </div>)}</h3> */}
        {/* <h3>Posts{mydata.posts.description}</h3> */}
        <h3>Messages to me:{message}</h3>
        </div>   
        </>)
}
export default Profile