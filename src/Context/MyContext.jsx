import React, { createContext, useContext } from 'react'
export const Sinup = createContext();
const MyContext = ({children}) => {

  return (
<Sinup.Provider value={"tiksha"}>
{children}
</Sinup.Provider>
    )
}

export default MyContext