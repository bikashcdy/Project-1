import React, { useEffect, useState } from 'react'
import {AuthContext} from './AuthContext'

const Authprovider = ({children}) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    console.log(token, 'This is token')
    console.log(JSON.stringify(user), 'This is user')

    useEffect(()=> {
        if(token && user) {
            localStorage.setItem("token",token)
            localStorage.setItem("user",JSON.stringify(user))
        }else {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    },[token, user]
    )


    const login = (loginToken, userDetails) => {
        setToken(loginToken);
        setUser(userDetails);
    }

  return (
    <AuthContext.Provider value = {{token, user, login}}>
        {children}
    </AuthContext.Provider>
  )
}

export default Authprovider
