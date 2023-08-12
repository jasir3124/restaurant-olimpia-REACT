import Backgroundimage from "../assets/img/background-restaurant-photo.webp";

export default function titleSelection() {
  return (
    <div className="titleSection">
      <div className="imageCont">
        <img src={Backgroundimage} alt="Background Restaurant" />
        <h1>Restaurant Olimpia</h1>
      </div>
    </div>
  );
}
