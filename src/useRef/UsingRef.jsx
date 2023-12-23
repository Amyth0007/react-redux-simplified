import React, { useState, useRef, useContext } from 'react';
import { LoginContext } from '../Context/LoginContextProvider';

const UseRef = ()=>{
    const inputref = useRef()
const [n, setn] = useState("");
const handleclick = ()=>{
 inputref.current.style.width = "300px";
 console.log(n);
}
let islogin = useContext(LoginContext);
    return(
        <div>
            <input name='username' ref={inputref} type='text' onChange={(e)=>setn(e.target.value)}/>
            <br></br>
            <br></br>
            <br></br>
            {islogin}
            <button onClick={handleclick} >click me</button>
        </div>
    )
}
export default  UseRef;