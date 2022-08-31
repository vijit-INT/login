import React,{createContext,useState,useEffect} from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  useEffect(()=>{
    fetch(` http://localhost:3000/register`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[count]);

  const addcount =()=>{
    setCount(count+1);
    console.log(count)
  }

  return (
   <AuthContext.Provider value={{
       auth,
       setAuth,
       data,
      addcount
   }}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider