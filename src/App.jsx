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
        let pokemon = ['pikachu','squirtle','charmander','bulbasaur'];
        let linkobj = {};
        //to get gif
        for(let i=0;i<4;i++){
        let li = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${pokemon[i]}`,{mode:"cors"});
        let lj = await li.json();
        //console.log(lj.data.images.original.url);



        //to get description
        let pkd = await fetch(`https://pokeapi.co/api/v2/characteristic/8/`);
        let pk = await pkd.json();
        console.log(pk);
        linkobj[pokemon[i]] = lj.data.images.original.url;
        }

        setLinks(linkobj)

        

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
