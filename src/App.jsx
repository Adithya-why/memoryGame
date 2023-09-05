//import { useState } from 'react'
import Topbar from './components/Topbar'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

import { Pokedex } from 'pokeapi-js-wrapper'


const key = import.meta.env.VITE_GIPHY_KEY;
//pokemopn api stuff

const P = new Pokedex;


function App() {
  
  let [links,setLinks] = useState();

  useEffect(()=>{
    
      async function foo(){
        let pokemon = ['pikachu','squirtle','charmander','bulbasaur'];
        let linkobj = {};
        //to get gif
        for(let i=0;i<4;i++){
        //let li = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${pokemon[i]}`,{mode:"cors"});
        //let lj = await li.json();
        //console.log(lj.data.images.original.url);
        //to get description and photos

        
          let x = await P.getPokemonByName(pokemon[i]);
          

          linkobj = {...linkobj, [i] : {'name': x.name,'abilities' : x.abilities,'url': x.sprites.front_default}};

       
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
