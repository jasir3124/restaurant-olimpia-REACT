import BackgroundImage from "../assets/img/background123.jpg";
import MenuCard from "./menuCard";

export default function MenuSection() {
  const menuCardInfo = [
    {
      id: "1",
      name: "Steak",
      wait: "15mins",
      cost: "12$",
    },
    {
      id: "2",
      name: "Fish",
      wait: "13mins",
      cost: "7$",
    },
    {
      id: "3",
      name: "Chicken",
      wait: "10mins",
      cost: "10$",
    },
    {
      id: "4",
      name: "Spagheti",
      wait: "15mins",
      cost: "11$",
    },
    {
      id: "5",
      name: "Penne",
      wait: "15mins",
      cost: "12$",
    },
    {
      id: "6",
      name: "Pizza",
      wait: "10mins",
      cost: "6$",
    },
  ];
  return (
    <div className="menuSection">
      <img src={BackgroundImage}></img>
      <div className="menu">
        <div className="titleCont">
          <h1>Menu Section</h1>
          <hr className="titleUnderline" />
        </div>
        <div className="menuCardHolder">
          {menuCardInfo.map((item) => (
            <MenuCard
              key={item.id}
              id={item.id}
              name={item.name}
              wait={item.wait}
              cost={item.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
