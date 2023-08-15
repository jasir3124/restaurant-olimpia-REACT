import BackgroundImage from "../assets/img/desert meny background.webp";
import DesertsCard from "./DesertsCard.js";

export default function DesertsSection() {
  const DesertsCardInfo = [
    {
      name: "ICE-CREAME",
    },
    {
      name: "Cake",
    },
    {
      name: "PIES",
    },
    {
      name: "FRUIT JUCE",
    },
    {
      name: "SOFT DRINKS",
    },
    {
      name: "ENERGY DRINKS",
    },
  ];

  return (
    <div className="DesertsSection">
      <img src={BackgroundImage} alt="" />
      <div className="DesertsSectionCont">
        <div className="titleCont">
          <h1>Deserts & Drinks</h1>
          <hr className="titleUnderline" />
        </div>
        <div className="CardsCont">
          {DesertsCardInfo.map((item) => (
            <DesertsCard key={item.name} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
