import React , {useReducer} from 'react'
let intialState = {count : 0}

const reducer = (state, kary)=>{
     if(kary.prakar ==="inc"){
        return {count:  state.count +1}
     }
     if(kary.prakar ==="dec"){
        return ({count:  state.count - 1})
     }
    console.log(state);
}
const UsingReduce = () => {
const [ state , nantr] =  useReducer(reducer, intialState)
    
const increse = ()=>{
    nantr({prakar: "inc"})
    console.log(state);
}
const decrease = ()=>{
    nantr({prakar: "dec"})
}
  return (
    <div>

    <h1>Count {state.count}</h1>
    <br></br>
    <br></br>
    <button onClick={increse}>increase</button>
    <button onClick={decrease}>decrese</button>
    </div>
  )
}

export default UsingReduce