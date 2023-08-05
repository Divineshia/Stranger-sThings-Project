import { useParams, useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function DeletePost({token}){
    const { _id } = useParams();
    const navigate = useNavigate();
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[price, setPrice] = useState('');
    const [location, setLocation] = useState ('');
    const [willDeliver,setWillDeliver] = useState(false);
    const [post,setPost]=useState([]);
    
    
   
     //call for deleting the post
     const deletePost = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts/?id=${_id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
    }

      

      
  
      useEffect(()=>{
          async function fetchsingleData(){
              try{
                  const response = await fetch(`${BASE_URL}/posts/?id=${_id}`,{
                    method : "GET",
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                  },

                  });
                  const result = await response.json();
                  console.log(result);
                  setPost(result.data.posts)
              }
              catch(error){
                  console.log('Error at getting posts',error);
              }
  
            }
  fetchsingleData();
  },[token])
     console.log(post) ;
     console.log(post.title) ;

    return(
    <>
    
    <h2> My post lists</h2>

    <h2>{post.data}</h2>
    <h2>{post.title}</h2>
            <p>{post.description}</p>
            <h5>{post.price}</h5>
            <h5>{post.location}</h5>
    < button onClick={()=>navigate ("/posts/:_id/edit")}>EDIT</button>
    <button onClick={deletePost}>DELETE</button>
    <button onClick={()=>navigate ("/posts")}>BACK </button>


    </>)
    
}