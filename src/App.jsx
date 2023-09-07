//import { useState } from 'react'
import Topbar from './components/Topbar'
import PictureCard from './components/PictureCard'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

import { Pokedex } from 'pokeapi-js-wrapper'


//key of giphy api from env file
const key = import.meta.env.VITE_GIPHY_KEY;
//pokemopn api stuff
const P = new Pokedex;


function App() {

  //array to hold list of pokemon
  let [pokemon,setpokemon] = useState([
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
  ]);
  
  

  //links used to store stuff about pokemon and their images
  let [links,setLinks] = useState();

  
  

  //runs on mount to make api cALLS and store stuff in state

  useEffect(()=>{
    console.log('effect running')
    

    //obj to store details
      let linkobj = {};

      async function getPokeDetails(){
        
        

        

        //to get gif
        for(let i=0;i<20;i++){

          //gets stuff from giphy
        let li = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${pokemon[i]}`,{mode:"cors"});
        let lj = await li.json();
        let alt = lj.data.images.original.url;



        //to get description and photos
          //gets stuff from pokeapi
        //gets poke detAILS
        let x = await P.getPokemonByName(pokemon[i]);
          
        //stores in linkobj
        linkobj = {...linkobj, [i] : {'name': x.name,'abilities' : x.abilities,'url': x.sprites.front_default, 'alt': alt}};
        
       
        
        
        
        }


        //stores stuff in state

        setLinks(linkobj);
        

        

      }

      getPokeDetails();


  },[pokemon]);


//create the cards
let picar = [];

if(links){
  for(let i=0;i<19;i++){
    picar.push(<PictureCard details={links[i]} key={i}/>)
  }
 
}
  

  


  
  return (
    <>
    <Topbar/>
    <div>Hi</div>
   

    <h1>Pictures</h1>

    {/*COmditional rendering*/ }
    <div className='cards'>
      {links ? (picar) : <p>Loading........</p>}
    </div>

    <button onClick={()=>{
      let temp = pokemon;
      temp.reverse();
      console.log('hi');
      setpokemon([...temp]);
    }}>Shuffle</button>
    
    </>
  )
}

export default App
