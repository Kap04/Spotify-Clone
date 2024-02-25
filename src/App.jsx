import Login from "./Login"
import React,{useState,useEffect} from "react"
import { getTokenFromUrl } from "./Spotify"
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi;

function App() {
   
  const [token, setToken] = useState();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
    }
    console.log("token",token)
  },[]);

  return (
    <div className="App">
      {token ? <h1>Logged in</h1> : <Login/>}
    </div>
  )
}

export default App
