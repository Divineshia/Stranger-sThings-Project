import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AddNewPost from './AddNewPost';



const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


function Posts({token}){
    const [allposts,setAllPosts]=useState([]);
    const navigate =useNavigate();
    const [searchInput , setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    
    useEffect(()=>{
        async function fetchData(){
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
},[token])
   console.log('All posts',allposts) ;
   console.log('Token',token);

   //search function
const originalArray=allposts;
//console.log(originalArray)
   const handleSearch = () => {
    const filteredResult = originalArray.filter(item =>
        item.title.toLowerCase().includes(searchInput.toLowerCase() )||
        item.description.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filteredResult);
    };
    


console.log('Searched posts result',filteredData);

    return (<>
    
     
    <div id ='navbar'>
    <h3> STRANGER'S THINGS</h3>
            <h3 onClick={()=>navigate ("/")}>HOME</h3>
            <h3 onClick={()=>navigate ("/posts")}>POSTS</h3>
            <h3 onClick={()=>navigate ("/profile")}>PROFILE</h3>
            <h3 onClick={()=>navigate ("/")}>LOG OUT</h3>
       
       </div>


       {/* 1. Search bar to search words inside all posts */}
       {/* All users should be able to filter posts with a simple text matcher */}
       <div >
   
          <input type='search' value={searchInput} onChange={event => setSearchInput(event.target.value)}
      placeholder="Search..."
    />
          <button onClick={handleSearch}>Search</button>
          <ul>
          {filteredData.map((word) => (
        <div className='search' key={word.id}><h3>{word.title} </h3>
        <p>{word.description}</p>
        <p>{word.price}</p>
        </div>
      ))}
    </ul>
          
       </div>

       {/* 2. Add new post only for authenticated user */}
        {token && <button onClick={()=>{navigate ("/posts/add")}}
            >Add New Post</button>}

        {allposts.map((p,index)=> <div key={index}
        className='allposts'>
            {/* 3. View posts, edit and delete only if authenticated and isauthor true for the post */}
            {<div className='Author'>
             {token && (p.isAuthor !=false) ? <div>
            
            <button onClick={()=>{navigate (`/posts/${p._id}`)}}>View</button> </div>
              :<></>}
            </div>}
            <h5>{p.isAuthor}</h5>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <h5>{p.price}</h5>
            <h5>{p.location}</h5>

            {/* 4. Send messages only if authenticated and isauthor true for the post 
            can send messsges to others post but not to own*/}
            {<div className='Author'>
             {token && (p.isAuthor ===false) ? 
            <button onClick={()=>{navigate (`/posts/${p._id}/messages`)}}>SEND MESSAGE </button>
              :<></>}
           </div>}
        
        </div>

        )}
    
    </> )
}
export default Posts