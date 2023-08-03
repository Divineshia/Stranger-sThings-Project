import { useParams } from "react-router-dom";
import {useState} from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function EditPost({token}){
    const { post_id } = useParams ();
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[price, setPrice] = useState('');
    const [location, setLocation] = useState ('');
    const [willDeliver,setWillDeliver] = useState(false);
    
    
    const updatePost = async (post_id) => {
        try {
          // You will need to insert a variable into the fetch template literal 
          // in order to make the POST_ID dynamic. 
          // 5e8d1bd48829fb0017d2233b is just for demonstration.
          const response = await fetch(`${BASE_URL}/posts/64cbfe2ef168c40014084496`, {
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
          return result
        } catch (err) {
          console.error(err);
        }
       
      }
      updatePost();
    return(
    <>
    <h2>Edit Post</h2>


    </>)
    
}