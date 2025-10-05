import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <>
    <Navbar/>
    <h1>Profile</h1>
    <Link to="/"><button className="btn">Sign In</button></Link>
    </>
  )
}

export default Profile