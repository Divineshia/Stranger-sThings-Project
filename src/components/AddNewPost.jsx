import {useState} from 'react';

export default function AddNewPost(){
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[price, setPrice] = useState('');
    const [location, setLocation] = useState ('')




    return(
    <>
    <div className="new form">
      <h1>Add New post</h1>
    <form className='form'>
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
            
            <label for="method">Willing to deliver?</label>
            <input type="checkbox"  name="method"  />
    

            <button>CREATE</button>

            </form>
            </div>
            </> )
        }