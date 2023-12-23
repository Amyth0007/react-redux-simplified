import React, { useEffect, useState } from 'react'

const UseFetch = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((d)=>setdata(d));
    }, [])
    return data;
}

export default UseFetch