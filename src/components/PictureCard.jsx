import { useEffect, useState } from "react";

export default function PictureCard(props){

    //state to handle if game lost by repeated clicks

    let [clicks,setclicks] = useState(0);

    //this eefct runs after every render
    //checks if lost
    useEffect(()=>{
            if(clicks>1){
               console.log('lost');
               props.lost();

            }
    })

    let name = props.details.name;
    let abilities = props.details.abilities;

    return(
        <div className="card" onClick={()=>{
            
            
            
            props.clickHandler();
            setclicks(clicks+1);
            
            }}>


        <div className="name">{name}</div>
       
        <img src={props.details.alt} width={100} height={100}/>
        
        <div className="abh">Abilities</div>
        
        {abilities.map((ab)=><div key={crypto.randomUUID()}className="ab" >{ab.ability.name}</div>)}

        </div>
    )

}