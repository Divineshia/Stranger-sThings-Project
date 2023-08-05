import { useParams, useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function EditPost({token}){
    const { POST_ID } = useParams();
    const navigate = useNavigate();
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[price, setPrice] = useState('');
    const [location, setLocation] = useState ('');
    const [willDeliver,setWillDeliver] = useState(false);
    const [myPost ,setMyPost] = useState({});
    const [post,setPost]=useState({});
    
    //Call for updating the post 
    const updatePost = async () => {
        try {
          // You will need to insert a variable into the fetch template literal 
          // in order to make the POST_ID dynamic. 
          // 64cbfe2ef168c40014084496 is just for demonstration.
          const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                title,
                description,
                price ,
                location ,
                willDeliver,
              }
            })
          });
          const result = await response.json();
          console.log(result);
          setMyPost(result);
        } catch (err) {
          console.error(err);
        }
       
      }
     //updatePost();
   
     //call for deleting the post
     const deletePost = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
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
                  const response = await fetch(`${BASE_URL}/posts/${POST_ID}`)
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

    return(
    <>
    
    <h2> My post lists</h2>
    <h2>{post.data}</h2>
    < button onClick={updatePost}>EDIT</button>
    <button onClick={deletePost}>DELETE</button>
    <button onClick={()=>navigate ("/posts")}>BACK </button>


    </>)
    
}