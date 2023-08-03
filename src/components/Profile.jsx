import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
//import { useParams } from 'react-router-dom';
const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const TOKEN= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNhYTQ4MjhlM2NhYTAwMTRiMzA5ZGUiLCJ1c2VybmFtZSI6InNoaWEiLCJpYXQiOjE2OTEwMDU5NzV9.f_5NLsfeoA-CP10RsTqLQjNR6sPNyWMaNwJ0HZAwXyI';

//console.log(token);
function Profile({token}){
    const [mydata,setMyData]=useState([]);
    const navigate =useNavigate();
    

    useEffect(()=>{
    const myDataProfile = async () => {
        try {
          console.log(token);
          const response = await fetch(`${BASE_URL}/users/me`, {
            method:'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
          const result = await response.json();
          console.log(result);
          setMyData(result.data);
        } catch (err) {
          console.error(err);
        }
      
    }
    myDataProfile()
},[])
console.log(mydata);
    return (<>
   
     
    <div id ='navbar'>
    <h3> STRANGER'S THINGS</h3>
            <h3 onClick={()=>navigate ("/")}>HOME</h3>
            <h3 onClick={()=>navigate ("/posts")}>POSTS</h3>
            <h3 onClick={()=>navigate ("/profile")}>PROFILE</h3>
            <h3 onClick={()=>navigate ("/")}>LOG OUT</h3>
        
       </div>
       

    <div className='Profile'>
        
        <h2>Profile Name:{mydata.username}</h2>
        <h3>Posts:{mydata.posts}</h3>
        <h3>Messages to me:{mydata.messages}</h3>
        </div>   
        </>)
}
export default Profile