import AboutourFoodImage from "../assets/img/about us background img.webp";

export default function AboutourFood() {
  return (
    <div className="aboutOurFoodSection">
      <div className="d-flex">
        <div className="w-50 aboutOurFoodImageCont">
          <img src={AboutourFoodImage}></img>
        </div>
        <div className="w-50 aboutOurFoodText">
          <h1>About Our Food</h1>
          <h2>Restaurant Olimpia</h2>
          <h3>
            We welcome you to sit back and relax, <br></br> while our best
            gourmet expert sets you up a scrumptious dinner, utilizing the best{" "}
            <br></br> and freshest ingredients. In case you’re searching for
            top-notch food, <br></br> restaurant Olimpia is unquestionably one
            of the spots to go in Tetovo. <br></br> Our menu offers something
            for everybody, from the light <br></br> passage of plates of mixed
            greens and little nibbles to the inconceivable <br></br> T Bone
            steak.
          </h3>
        </div>
      </div>
      <div className="openingHours">
        <h1>Opening Hours</h1>
        <div className="d-flex openingHoursCont">
          <div className="w-50 openingHours1">
            <h3>SUNDAY & MONDAY-----CLOSED</h3>
            <h3>TUESDAY ----- 10.00 - 00.00</h3>
            <h3>WEDNESDAY-----10.00 - 00.00</h3>
          </div>
          <div className="w-50 openingHours2">
            <h3>SUNDAY & MONDAY-----CLOSED</h3>
            <h3>TUESDAY ----- 10.00 - 00.00</h3>
            <h3>WEDNESDAY-----10.00 - 00.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
