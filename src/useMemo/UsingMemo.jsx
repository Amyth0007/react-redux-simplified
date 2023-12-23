import React, {useMemo, useState} from 'react'

const UsingMemo = () => {
    const [number, setnumber] = useState(0);
    const [dark, setdark] =  useState(false);


   const cssstyle= {
    backgroudColor : dark ? 'black' :  'white',
    color : dark ? "blue" : "pink"
   }

   
  let expensiveval =  useMemo(()=>{
        return expensivefunc(number)
   }, [number])

  return (
    <div style={cssstyle}>
        <input type="number" name="" id=""
           onChange={(e)=>setnumber(e.target.value)}
        
        />
        <br></br>
       calculation : {expensiveval}
        <br></br>
        <button onClick={()=>setdark(!dark)}>toggle</button>
    </div>
  )
}

function expensivefunc(number){
    for (let index = 0; index < 1000000000; index++) {
        
    }
    return number;
}

export default UsingMemo