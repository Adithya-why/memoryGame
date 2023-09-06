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
  

  //links used to store stuff about pokemon and their images
  let [links,setLinks] = useState();


  //runs on mount to make api cALLS and store stuff in state
  useEffect(()=>{
    
      async function getPokeDetails(){
        let pokemon = [
          "pikachu",
          "charizard",
          "bulbasaur",
          "squirtle",
          "jigglypuff",
          "mewtwo",
          "gengar",
          "snorlax",
          "eevee",
          "machamp",
          "gyarados",
          "alakazam",
          "vaporeon",
          "dragonite",
          "golem",
          "lapras",
          "mew",
          "pidgeot",
          "raichu",
          "blastoise"
        ];


        let linkobj = {};
        //to get gif
        for(let i=0;i<19;i++){
        let li = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${pokemon[i]}`,{mode:"cors"});
        let lj = await li.json();
        let alt = lj.data.images.original.url;



        //to get description and photos

        //gets poke detAILS
        let x = await P.getPokemonByName(pokemon[i]);
          
          //stores in linkobj
          linkobj = {...linkobj, [i] : {'name': x.name,'abilities' : x.abilities,'url': x.sprites.front_default, 'alt': alt}};
          console.log(linkobj[i]['url'],linkobj[i]['alt']);
       
        }


        //stores stuff in state

        setLinks(linkobj);

        

      }

      getPokeDetails();


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
