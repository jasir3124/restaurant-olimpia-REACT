export default function NavBar() {
  const scrollToTitleSection = () => {
    const titleSection = document.querySelector(".titleSection");
    titleSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="navBar">
        <a href=".titleSection" className="title">
          Restaurant Olimpia
        </a>
        <div className="links">
          <a href="#">About Our Food</a>
          <a href="#">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}
