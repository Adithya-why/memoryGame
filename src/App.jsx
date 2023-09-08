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

//global poke array
//not modified at any point
//to make sure key of picturecard remains same after rerender
let pokea = [
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


function App() {
  //score stuff


  let [current,setcurrent] = useState(0);
  let [best,setbest] = useState(0);

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
  //also runs if pokemon arry is changed
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


  //function to randomize the screen and card order by chanmging the pokemon array
  //function to deal with clicks
  function randomize(){
    setcurrent(current+1);
    if(current>=best){
      setbest(current);
    }
    let temp = pokemon;
    temp.sort(()=>Math.random() - 0.5)
    
    setpokemon([...temp]);
  }

//create the cards
let picar = [];

if(links){
  for(let i=0;i<19;i++){
    picar.push(<PictureCard details={links[i]} key={pokea.indexOf(links[i].name)} clickHandler={randomize}/>)
  }
 
}
  

  


  
  return (
    <>
    <Topbar current={current} best={best}/>
    <div>Hi</div>
   

    <h1>Pictures</h1>

    {/*COmditional rendering*/ }
    <div className='cards'>
      {links ? (picar) : <p>Loading........</p>}
    </div>

    
    
    </>
  )
}

export default App
