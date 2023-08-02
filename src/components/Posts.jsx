import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';



const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


function Posts(){
    const [allposts,setAllPosts]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`${BASE_URL}/posts`)
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
    <header> 
     <h2> Stranger's Things</h2>
    <div id ='navbar'>
        <Link to ='/'>HOME</Link>
        <Link to ='/posts'>POSTS</Link>
        <Link to ='/profile'>PROFILE</Link>
        <Link to ='/'>LOG OUT</Link>
       </div>
       </header>

        {allposts.map((p,index)=> <div key={index}
        className='allposts'>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <h5>{p.price}</h5>
            <h5>{p.location}</h5>
        
        </div>

        )}
    
    </> )
}
export default Posts