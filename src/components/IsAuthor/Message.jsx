import { useParams,useNavigate } from "react-router-dom";
import {useState} from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Message({token}){
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [mesg, setMesg] = useState('');
    const navigate = useNavigate();
    

    const postMessage = async () => {
        try {
          const response = await fetch(`${BASE_URL}/posts/${id}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              message: {
                content,
              }
            })
          });
          const result = await response.json();
          console.log(result);
          setContent('');
          setMesg(result);
        } catch (err) {
          console.error(err);
        }
        
      }
      


    return(
        <>
        <div className="message">
        <h2> Message User about this Post</h2>
        <label>Title:
            <input value ={content}
             onChange={(e)=>setContent(e.target.value)}/>
             </label>
   
        < button onClick={postMessage}>SEND MESSAGE</button>
        </div>
        <button onClick={()=>navigate ("/posts")}>BACK </button>
        </>

    ) 
}