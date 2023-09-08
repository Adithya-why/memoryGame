import { useEffect, useState } from "react";

export default function PictureCard(props){

    //state to handle if game lost by repeated clicks

    let [clicks,setclicks] = useState(0);

    //this eefct runs after every render
    //checks if lost
    useEffect(()=>{
            if(clicks>1){
               
            }
    })

    let name = props.details.name;

    return(
        <div className="card" onClick={()=>{
            setclicks(clicks+1);
            
            
            props.clickHandler();
            
            }}>


        <div>CARD </div>
        <div>{name}</div>
        <img src={props.details.alt} width={100} height={100} />

        </div>
    )

}