import React, {useState, useEffect} from 'react'

const Cmpts = () => {
    const [cnt, setcnt] =  useState(0);
    const [cnt1, setcnt1] =  useState(5);

    // useEffect(()=>{
    //     //see how title also getting changed at the time of re rendering
    //     document.title = `${cnt} without dependancy`
    // })

    useEffect(()=>{
        //see how title getting changed at the time of re rendering cause of dependancy array is empty
        document.title = `${cnt1} without dependancy`

    }, [cnt1])

    //  useEffect(()=>{
    //     //see how title not getting changed at the time of re rendering cause of dependancy array is empty
    //     document.title = `${cnt} without dependancy`
    // }, [])
    
  return (
    <div>
     <h2>{cnt}</h2>
     <button onClick={()=>setcnt(cnt+1)}>click to cnt</button>
     <h2>{cnt1}</h2>
     <button onClick={()=>setcnt(cnt+5)}>click to cnt1</button>

    </div>
  )
}

export default Cmpts