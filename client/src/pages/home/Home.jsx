import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Sitemap from "../../components/sitemap/Sitemap";
import "./home.css";

const Intro = () => {
  return (
    <div>
    <div className="homeContainer">
      {/* <div className="hometop">
        <img src="https://firebasestorage.googleapis.com/v0/b/cardano-d265c.appspot.com/o/bg-3.jpg?alt=media&token=3ccacd72-ce76-458d-b779-a2dd86111c0d" className="homeimg"/>
        <div className="hometext">Verifications</div>
      </div> */}
        <Features /> 
    </div>
      <Sitemap />   
    <Footer />
    </div>
  );
};

export default Intro;
