import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import santaFart from './images/santa-fart.png';
import Carousel from 'react-bootstrap/Carousel';
import garfield from './images/garfield-christmas.webp';
import speedy from './images/speedy.jpg';
import patty from './images/patty.jpg';
import pokemon from './images/pokemon.jpg';
import Image from 'react-bootstrap/Image';
import concert from './images/concert.jpg';
import luka from './images/luka.jpg';
import minion from './images/minion.jpg';
import polaroid from './images/polaroid.jpg';
import summer from './images/summer.jpg';
import sweaters from './images/sweaters.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" fixed="top" className="top-bar">
        <img src={santaFart} className="fart-img"></img>
        <Navbar.Brand className="holidays">Happy Holidays!</Navbar.Brand>
        <img src={santaFart} className="fart-img"></img>
      </Navbar>
      <Carousel className="carousel" variant="dark">
        <Carousel.Item interval={5000}>
          <img
            className="carousel-img"
            src= {garfield}
          />
          <Carousel.Caption>
            <h3>Luka:</h3>
            <p className="message">Thank you for being a great friend (press arrows to continue).</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="carousel-img"
            src= {speedy}
          />
          <Carousel.Caption>
            <p className="message">I always enjoy spending time with you and am very glad that I could see you over the holidays.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="carousel-img"
            src= {patty}
          />
          <Carousel.Caption>
            <p className="message">You mean a lot to me and I hope we can see each other again soon.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="carousel-img"
            src= {pokemon}
          />
          <Carousel.Caption>
            <p className="message">I love you and hope you have a wonderful semester. -Jared</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="photos">
        <div className="left">
          <Image src={concert} roundedCircle className='photo'></Image>
          <Image src={luka} roundedCircle className='photo'></Image>
          <Image src={polaroid} roundedCircle className='photo'></Image>
        </div>
        <div className="right">
          <Image src={sweaters} roundedCircle className='photo'></Image>
          <Image src={summer} roundedCircle className='photo'></Image>
          <Image src={minion} roundedCircle className='photo'></Image>
        </div>
      </div>
    </div>
  );
}

export default App;
