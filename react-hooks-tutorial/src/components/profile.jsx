import React, { useContext } from 'react'
import Contact  from './contact'
import { AppContext } from '../context/appContext'

 const Profile = () => {
    const [phone, name] = useContext(AppContext)
  return (
    <div>
        <h2>Profile</h2>
        <h1>name : {name}</h1>
        <Contact />
    </div>
  )
}

export default Profile
