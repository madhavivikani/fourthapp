import { Link } from "react-router-dom";
import Header from "./ABOUT/Header";
import About_us from "./ABOUT/About_us";
import Resturant from "./ABOUT/Resturant";
import { Container } from "react-bootstrap";
import { IoPlayOutline } from "react-icons/io5";
import Testi_a from "./ABOUT/Testi_a";
import Footer from "./ABOUT/Footer";

function Home() {
  return (
    <div>
      <Header/>

      <About_us />

      <Resturant />

      <div className="play">
        <Container className="border1">
          <div className="inner_play">
            <div className="play_center">
              <a href="#https://vimeo.com/369245407">
                <i><IoPlayOutline></IoPlayOutline></i>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Testi_a />

      <Footer />
    </div>
  );
}

export default Home;