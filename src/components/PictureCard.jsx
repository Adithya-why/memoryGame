import { useState } from "react";

export default function PictureCard(props){

    //state to handle if game lost by repeated clicks

    let [clicks,setclicks] = useState(0);


    let name = props.details.name;

    return(
        <div className="card" onClick={()=>{
            props.clickHandler();
            setclicks(clicks+1);
            }}>


        <div>CARD </div>
        <div>{name}</div>
        <img src={props.details.alt} width={100} height={100} />

        </div>
    )

}