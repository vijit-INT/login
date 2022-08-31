import React,{useState,useContext} from 'react'
import { AuthContext } from '../Auth/AuthContext';
import styles from './Navbar.module.css';

const Login = () => {
     const {setAuth,data}=useContext(AuthContext);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    


    

     const login = () =>{
        data.filter(checkData);
        function checkData(item){
            
            if(item.Email===email && item.password === password){
               setAuth(true);
                setEmail("");
                setPassword("");
                alert("!You logged in")
                return;
            }
        }

        
     }
      
  return (
    <div className={styles.Login}>

        <input value={email} placeholder="Enter Mail" onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button onClick={()=>login()}>Login</button>
    
    </div>
  )
}

export default Login