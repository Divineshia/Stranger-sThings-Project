import { useParams, useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function ViewPost({token}){
    const { _id } = useParams();
    const navigate = useNavigate();
    const [post,setPost]=useState([]);
    
    console.log(useParams());
    console.log(`${BASE_URL}/posts/${_id}`);
   
     //call for deleting the post
     const deletePost = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts/${_id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const result = await response.json();
        console.log('Ur post is deleted',result);
        return result
      } catch (err) {
        console.error(err);
      }
    }

      

      
  
      useEffect(()=>{
          async function fetchsingleData(){
              try{
                  const response = await fetch(`${BASE_URL}/posts/${_id}`,

                  {
                    method: "GET"
                  
                  });
                  const result = await response.json();
                  console.log('View post result',result);
                  setPost(result.data.posts)
              }
              catch(error){
                  console.log('Error at getting posts',error);
              }
  
            }
  fetchsingleData();
  },[_id])
     console.log(post) ;
     console.log(post.title) ;

    return(
    <>
    
    <h2> My post Details</h2>
    {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <h5>{post.price}</h5>
          <h5>{post.location}</h5>
        </>
      )}
  
            
    < button onClick={()=>navigate (`/posts/${_id}/edit`)}>EDIT</button>
    <button onClick={deletePost}>DELETE</button>
    <button onClick={()=>navigate ("/posts")}>BACK </button>


    </>)
    
}