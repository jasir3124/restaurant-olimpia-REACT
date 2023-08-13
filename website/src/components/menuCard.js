export default function MenuCard(props) {
  const { id, name, wait, cost } = props;

  return (
    <div className="menuCard">
      <div className="d-flex cardInfoCont">
        <h1 className="itemNumber">{id}</h1>
        <h1 className="itemName">{name}</h1>
      </div>
      <p className="cardText">
        <i>
          Fusce ultrices lorem id pharetra pulvinar. Sed vitae sollicitudin
          libero. Curabitur dui arcu, ultricies aliquet viverra in, aliquam eget
          turpis. Vivamus iaculis dapibus massa.
        </i>
      </p>
      <div className="cardInfoCont2">
        <p className="waitTime">Wait Time: {wait}</p>
        <p className="cost">{cost}</p>
      </div>
    </div>
  );
}
