import Navigation from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Cards";
import Banner from "../components/Banner/Banner";
import Carousels from "../components/Carousel/Carousel";
import "./css/home.css"

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Carousels />
      <div style={{ marginTop: "1rem", marginBottom: "3rem" }} className="border-bottom border-dark border-3"></div>
      <h1 className="p">Kategori 1</h1>
      <Card />
      <h1 className="p">Kategori 2</h1>
      <Card />
      <div style={{ marginTop: "1rem", marginBottom: "3rem" }} className="border-bottom border-dark border-3"></div>
      <Footer />
    </div>
  )
};

export default Home;
