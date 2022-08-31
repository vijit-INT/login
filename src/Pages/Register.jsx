import React,{useState} from 'react'
import styles from './Navbar.module.css';

const Register = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState();
  
    const register = () =>{
        
            fetch('http://localhost:3000/register',{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                } ,
                body:JSON.stringify(
                    {
                      "Name":name,
                      "Age":age,
                      "Email":email,
                      "password":password
                    }
                ) 
              }).then(()=>{
                alert('Regestration successful!')
              })
              setAge("");
              setEmail("");
              setName("");
              setPassword("");
  }

  return (
    <div className={styles.Register}>
        <input value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
        <br />
        <input value={age} placeholder="Enter Your Age" onChange={(e)=>setAge(e.target.value)} /> 
        <br />
        <input value={email} placeholder="Enter Mail" onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button onClick={()=>register()}>Register</button>
    </div>
  )
}

export default Register