export default function SpecialMenuCard(props){
    const {image, wait, cost} = props;
    return(
        <div>
            <img src={image}></img>
            <p>{wait}</p>
            <p>{cost}</p>
        </div>
    )
}