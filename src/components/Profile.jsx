import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const TOKEN= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNhYTQ4MjhlM2NhYTAwMTRiMzA5ZGUiLCJ1c2VybmFtZSI6InNoaWEiLCJpYXQiOjE2OTEwMDU5NzV9.f_5NLsfeoA-CP10RsTqLQjNR6sPNyWMaNwJ0HZAwXyI';


function Profile(){
    const [mydata,setMyData]=useState([]);

    useEffect(()=>{
    const myDataProfile = async () => {
        try {
          const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN}`
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
    <header> 
     <h2> Stranger's Things</h2>
    <div id ='navbar'>
        <Link to ='/'>HOME</Link>
        <Link to ='/posts'>POSTS</Link>
        <Link to ='/profile'>PROFILE</Link>
        <Link to ='/'>LOG OUT</Link>
       </div>
       </header>

    <div className='Profile'>
        <h1>Profile page</h1>
        <h2>Username:{mydata.username}</h2>
        <h3>Posts:{mydata.posts}</h3>
        <h3>Messages:{mydata.messages}</h3>
        </div>   
        </>)
}
export default Profile