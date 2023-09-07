export default function PictureCard(props){

    let name = props.details.name;

    return(
        <div className="card" onClick={props.clickHandler}>


        <div>CARD </div>
        <div>{name}</div>
        <img src={props.details.alt} width={100} height={100} />

        </div>
    )

}