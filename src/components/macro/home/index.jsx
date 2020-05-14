import React,{useState} from 'react';

// Layout 
import NavBar from '../../meso/layout/navbar';

// Modals
import Login from '../login/';
import Signup from '../signup/';

const Home = () =>{

    const [login,setLogin] = useState(false);
    const [signup,setSignup] = useState(false);

    return(<div>
        <Login isOpen={login} onClose={()=>setLogin(false)}/>
        <Signup isOpen={signup} onClose={()=>setSignup(false)}/>
        <NavBar openLogin={()=>setLogin(true)} openSignup={()=>{setSignup(true)}}/>
    </div>);
}

export default Home;