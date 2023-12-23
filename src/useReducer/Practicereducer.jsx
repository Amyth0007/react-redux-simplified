import React, {useReducer} from 'react'
const survatila = {count: 0}
const reducer=(stithi, kary)=>{
    if(kary.praker==="vadhva"){
        return {count: stithi.count + 1} 
    }
    if(kary.praker==="kmi kara"){
        return {count : stithi.count - 1} 
    }
}
const Practicereducer = () => {

    const [aata, nantr] = useReducer( reducer, survatila);
    function increase(){
        nantr({praker: "vadhva"})
    }
    function decrease(){
        nantr({praker: "kmi kara"})
    }
  return (
    <div>
        Count : {aata.count}
        <br></br>
        <br></br>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Practicereducer