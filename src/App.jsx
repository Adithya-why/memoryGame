//import { useState } from 'react'
import Topbar from './components/Topbar'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

const key = import.meta.env.VITE_GIPHY_KEY;

function App() {
  
  let [links,setLinks] = useState();

  useEffect(()=>{
    
      async function foo(){

        let linkarray = [];
        let li = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=&rating=g`,{mode:"cors"});
        let lj = await li.json();
        console.log(lj.data.images.downsized.url);

      }

      foo();


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
