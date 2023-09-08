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
//basically used to set keys for car components
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

  //used to record svcores to display at top
  let [current,setcurrent] = useState(0);
  let [best,setbest] = useState(0);



  //to disable stuff while loading
  //sets pointer events to none while loading and auto after loading
  //makes cards not clickable while loading
  let [disvar,setdisvar] = useState('auto');



  //used to gtrack whether game is lost
  //if lost, a lost message is shwon insgtead of cards with pokemon
  let [ll,setll] = useState(false);

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
    console.log('effect running');

    //loading so disables clicks
    setdisvar('none');
    

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

        //finished loading so clicks turned on
        setdisvar('auto');
        

        

      }

      getPokeDetails();


  },[pokemon]);


  //function to randomize the screen and card order by chanmging the pokemon array
  //function to deal with clicks
  function randomize(){
    //increaes score
    setcurrent(current+1);
    

    //randomizez the array
    let temp = pokemon;
    temp.sort(()=>Math.random() - 0.5)
    
    setpokemon([...temp]);
  }

  //called  y card if clicked more than once, so lost
  function lost(){
    //sets ll to display lost message instead of cards
    setll(true);

    //sets best score
    if(current>best){
      setbest(current);
    }

    //resets current score
    setcurrent(0);
  }

//create the cards
let picar = [];
//creates the array of cards
if(links){
  for(let i=0;i<19;i++){
    picar.push(<PictureCard details={links[i]} key={pokea.indexOf(links[i].name)} clickHandler={randomize} lost = {lost}/>)
  }
 
}
  

  


  
  return (
    <>
    <Topbar current={current} best={best}/>
    <div>Hi</div>
   

    <h1>Pictures</h1>

    {/*COmditional rendering*/ }
    <div className='cards' style={{pointerEvents: disvar}}>
      {
        //if not lost, render loading meeage or cards
      !ll ? (
      links ? (picar) : <p>Loading........</p>
      )

      :
        //if lost, lost message
      <div>HAHAHAHA YOU LOST</div>
      
      }

      
      
    
    </div>
      {/*makes card appear again after lost*/}
    <button onClick={()=>{setll(false)}}>Restart</button>
    
    </>
  )
}

export default App
