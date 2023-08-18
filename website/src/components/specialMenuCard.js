export default function SpecialMenuCard(props) {
  const { image, name, wait, cost } = props;
  return (
    <div className="SpecialMenuCard">
      <img src={image} alt=""></img>
      <h1>{name}</h1>
      <p className="specialMenuCardLorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id
        libero, voluptatum impedit laboriosam
      </p>
      <div className="titleCont">
        <p className="waitTime">Wait Time: {wait}</p>
        <p className="cost">{cost}</p>
      </div>
    </div>
  );
}
