import "./Login.css"
import { loginUrl } from "./Spotify";
import React from 'react'

function Login() {
  return (
    <div className='login' >
        <img src='https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg' alt='spotify image'/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login