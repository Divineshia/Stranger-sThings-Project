import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AddNewPost from './AddNewPost';



const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


function Posts(){
    const [allposts,setAllPosts]=useState([]);
    const navigate =useNavigate();

    useEffect(()=>{
        async function fetchData(token){
            try{
                const response = await fetch(`${BASE_URL}/posts`,{
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },

                  });
                const result = await response.json();
                //console.log(result);
                setAllPosts(result.data.posts)
            }
            catch(error){
                console.log('Error at getting posts',error);
            }

}
fetchData();
},[])
   console.log(allposts) ;
    return (<>
    
     
    <div id ='navbar'>
    <h3> STRANGER'S THINGS</h3>
            <h3 onClick={()=>navigate ("/")}>HOME</h3>
            <h3 onClick={()=>navigate ("/posts")}>POSTS</h3>
            <h3 onClick={()=>navigate ("/profile")}>PROFILE</h3>
            <h3 onClick={()=>navigate ("/")}>LOG OUT</h3>
       
       </div>
       

        {allposts.map((p,index)=> <div key={index}
        className='allposts'>
             {p.isauthor && 
            <button onClick={()=><AddNewPost/>}
            >Add New Post</button>}
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <h5>{p.price}</h5>
            <h5>{p.location}</h5>
           
        
        </div>

        )}
    
    </> )
}
export default Posts