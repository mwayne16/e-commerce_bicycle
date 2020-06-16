import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Hero() {
  const [imgPos, updatePos] = useState({ transform: 'translateY()' });

  const handleParralax = () => {
    const offSet = window.pageYOffset;
    updatePos({ transform: `translateY(${offSet * -0.02}%)` });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleParralax);
    return () => {
      window.removeEventListener('scroll', handleParralax);
    };
  }, []);
  return (
    <section className="hero">
      <div className="hero-container">
        <div style={imgPos} className="hero-img"></div>
      </div>
    </section>
  );
}
// Refactor to make arrivals accept children props
function Arrivals() {
  return (
    <section className="arrivals">
      <h1>New Arrivals</h1>
      <div className="collection-showcase">
        <div className="image-wrapper">
          <img
            src={
              'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/gh-pages/assets/images/bike1.jpeg'
            }
            alt="urban bike #1"
          />
          <img
            src={
              'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/gh-pages/assets/images/bike2.jpeg'
            }
            alt="urban bike #2"
          />
          <img
            src={
              'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/gh-pages/assets/images/bike3.jpeg'
            }
            alt="urban bike #3"
          />
        </div>
        <Link to="/shop">
          <button type="button" id="collectionBTN" className="defaultButton">
            <h3>View Collection</h3>
          </button>
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="about-row-container">
        <div className="about-descblock">
          <div className="about-content-wrapper">
            <h1>About Us</h1>
            <p>
              This is your About section. It’s a great space to tell your story
              and to describe who you are and what you do. If you're a business,
              talk about how you started and tell the story of your professional
              journey. People want to know the real you, so don't be afraid to
              share personal anecdotes. Explain your core values and how you,
              your organization, or your business stand out from the crowd.
            </p>
            <button className="defaultButton">
              <h3>Visit Us</h3>
            </button>
          </div>
        </div>
        <div className="about-imgblock">
          <img
            src={
              'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/master/client/public/assets/images/about1.jpeg'
            }
            alt="Urban Bikes Employees"
          />
        </div>
      </div>
      <div className="about-row-container">
        <div className="about-imgblock">
          <img
            src={
              'https://raw.githubusercontent.com/mwayne16/e-commerce_bicycle/master/client/public/assets/images/about2.jpeg'
            }
            alt="Man on Urban Bikes Bicycle"
          />
        </div>
        <div className="about-descblock">
          <div className="about-content-wrapper">
            <h1 className="alt-title">Cycle with Style</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="defaultButton alt-button">
              <h3 className="alt-title">What's New</h3>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Arrivals />
      <section className="highlighted-quote">
        <h1>
          <span>
            <h1>"</h1>
          </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          voluptate consectetur.
          <span>
            <h1>"</h1>
          </span>
        </h1>
      </section>
      <About />
    </React.Fragment>
  );
}

export default Home;

// transform: `translate(${offSet / 20}%,${offSet / -3}%)`
