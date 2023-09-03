//import { useState } from 'react'
import Topbar from './components/Topbar'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  
  let [links,setLinks] = useState({});

  useEffect(()=>{
    
      setLinks({...links,['ed'] :'ex'});
      console.log("finsihd");

  },[]);

  
  return (
    <>
    <Topbar/>
    <div>Hi</div>


    <h1>Pictures</h1>
    </>
  )
}

export default App
