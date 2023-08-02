import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
       <div id ='navbar'>
        <Link to ='/'>Home</Link>
        <Link to ='/posts'>Posts</Link>
        <Link to ='/login'>Login</Link>
       </div>
    )
}
