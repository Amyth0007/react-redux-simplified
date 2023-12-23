import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../Context/LoginContextProvider';
import './style.css';


const Cardone = ()=>{
    const [user, setuser] = useState([]);
    useEffect(() => {
       data();
      
    }, [])
    


    async function data(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'});
        let data = await res.json();
        console.log(data);
        setuser(data)


    }
    const loginuser = useContext(LoginContext)

    const qwert = ()=>{
        console.log("filter user ");
        let filterdata = user.filter((user)=>{
            return user.name.includes('a');
        })


        console.log(filterdata);
    }
    return(
    <div className='card'>
          <h1>use who is logged in now {loginuser}</h1>
        <button onClick={()=>{data()}}>click me</button>
        <div>
        <div className='box'>
            {user.map((user)=>(
                <div className='inner' key={user.id} >
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                </div>
                ))}
               </div>
        </div>
    <button onClick={()=>{qwert()}}>click me</button>
           
    </div>
    )
}

export default Cardone