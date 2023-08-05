import { useNavigate, useParams } from "react-router-dom";
import {useState,useEffect} from 'react';

const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function EditForm({token}){
    const { _id } = useParams();
    console.log( _id);
    const navigate = useNavigate();
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[price, setPrice] = useState('');
    const [location, setLocation] = useState ('');
    const [willDeliver,setWillDeliver] = useState(false);
    const [myPost ,setMyPost] = useState({});
    
    
    async function handleSubmit(e) {
        e.preventDefault();
    //Call for updating the post 
    const updatePost = async () => {
        try {
          // You will need to insert a variable into the fetch template literal 
          // in order to make the POST_ID dynamic. 
          // 64cbfe2ef168c40014084496 is just for demonstration.
          const response = await fetch(`${BASE_URL}/posts/?id=${_id}`, {
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
          console.log(err);
        }
      }
      updatePost();
    }

    return(
    <>
     <button onClick={()=>navigate ("/posts")}>BACK</button>
    <div className="edit-form">
      <h1>Edit post</h1>
    <form className='post-form' onSubmit ={handleSubmit}>
            <label>Title:{" "}
            <input value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            
            <label>Description:{" "}
            <input value ={description}
             onChange={(e)=>setDescription(e.target.value)}/>
             </label>

             <label>Price:{" "}
            <input value={price}
            onChange={(e)=>setPrice(e.target.value)}/>
            </label>
            
            <label>Location:{" "}
            <input value={location}
            onChange={(e)=>setLocation(e.target.value)}/>
            </label>
            
            <input type="checkbox" value={willDeliver} onChange={(e) => setWillDeliver(e.target.checked)  } />
            <label>Willing to deliver?</label>
    

            <button >SAVE</button>
            
           

            </form>
            </div>
           
           
    
    
    </>
    )
}