import Backgroundimage from "../assets/img/background for special menu.jpg";
import FoodImage1 from "../assets/img/special food image 1.jpg";
import FoodImage2 from "../assets/img/special food image 2.jpeg";
import SpecialMenuCard from "./specialMenuCard";

export default function SpecialMenu() {
  const specialMenuItems = [
    {
      image: FoodImage1,
      wait: "7min",
      cost: "6$",
    },
    {
      image: FoodImage2,
      wait: "15min",
      cost: "12$",
    },
  ];
  return (
    <div className="specialMenu">
      <img src={Backgroundimage}></img>
      <div className="speccialMenuCont">
        <div className="titleCont">
          <h1>Special Menu</h1>
          <hr className="titleUnderline" />
        </div>
        <div className="">
          {specialMenuItems.map((item) => (
            <SpecialMenuCard
              image={item.image}
              wait={item.wait}
              cost={item.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
