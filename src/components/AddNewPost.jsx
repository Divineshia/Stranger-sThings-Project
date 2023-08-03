import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function AddNewPost({token}){
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[price, setPrice] = useState('');
    const [location, setLocation] = useState ('');
    const [willDeliver,setWillDeliver] = useState(false);
    const [isAuthor]=useState(true);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
    const makePost = async () => {
        try {
          const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                title,
                description,
                price,
                location,
                willDeliver,
                isAuthor:true,
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
      makePost();
      setTitle('');
      setDescription('');
      setPrice('');
      setLocation('');
    }


    return(
    <>
    <div className="add-form">
      <h1>Add New post</h1>
    <form className='form' onSubmit ={handleSubmit}>
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
            
            {/* <h6>{Check ? 'Delivery' : 'No Delivery'}</h6> */}
            <input type="checkbox" value={willDeliver} onChange={(e) => setWillDeliver(e.target.checked)  } />
            <label>Willing to deliver?</label>
    

            <button >CREATE</button>
            
           

            </form>
            </div>
            <button onClick={()=>navigate ("/posts")}>BACK</button>
            </> )
        }