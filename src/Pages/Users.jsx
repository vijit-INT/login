import React,{useContext} from 'react'
import {AuthContext} from '../Auth/AuthContext';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Users = () => {
  const {auth,data}=useContext(AuthContext);

    if(!auth){
      return <div>
     <Link to='/' id={styles.userH1}>Please Login First...</Link>
      </div>
    }
  return (
    <div> 
    <h1 id={styles.h1headin}>Users List</h1>
    <div className={styles.Users} >
    
     
        {
          data.map((item)=>(
            <div key={item.id}>
            <ul>
              <li> 
              <h1 id={styles.h1}>Name:-{item.Name}</h1>
              <h1 id={styles.h1}>Age:-{item.Age}</h1>
              <h1 id={styles.h1}>Email:-{item.Email}</h1>
              </li>
              <br/>
            </ul>
            </div>
            
          ))
        }
    </div>
    </div>
  )
}

export default Users