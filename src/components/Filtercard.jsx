import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContextProvider'

const Filtercard = () => {
  const loginuser = useContext(LoginContext)
  return (
    <div>Filtercard {loginuser}</div>
  )
}

export default Filtercard