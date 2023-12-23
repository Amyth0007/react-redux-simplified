import React, {createContext, useState} from 'react'
// step 1 creating context
export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {

    const [userdetails, setuserdetails] =  useState("Amit");
    // let userdetails = "amit";
  return (
    <LoginContext.Provider value={userdetails}>
       {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider