import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import { AuthContext } from '../Auth/AuthContext';

const NavBar = () => {
  const {addcount}=useContext(AuthContext);
  return (
    <div> 
    <br />
    <div className={styles.nav}>
    <Link className={styles.comp1} to='/register'>Register</Link>
    <Link className={styles.comp2} to='/'>Login</Link>
    <Link className={styles.comp3} to='list' onClick={()=>addcount()} >Users</Link>
   
    </div>
    </div>
  )
}

export default NavBar 