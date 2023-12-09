import logo from "../assets/logo.png";
import BirdOfTheDay from "../components/BirdOfTheDay";
import HomeHeader from "../components/HomeHeader";
import "../pages/HomePage.css";
export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <div className="bigRectangle"></div>
      <BirdOfTheDay />
      <div className="bigRectangleTwo"></div>
    </>
  );
}
