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
    const [posts,setPosts]= useState([]);
    

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
          setPosts(result.data.posts)
        } catch (err) {
          console.error(err);
        }
      
    }
    userProfile()
},[token])
//console.log(user);
console.log(posts);
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
        {posts &&
        <h3>Posts:{posts.map((data)=> 
        (<div className='myposts' key ={data.id}>
           
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.location}</p>
            </div>))}</h3> }
        
        <h3>Messages to me:{message}</h3>
        </div>   
        </>)
}
export default Profile