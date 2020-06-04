import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
function Contact() {
  return (
    <section className="contact-container">
      <h1 className="section-header">Contact Us</h1>
      <main className="contact-information">
        <div className="contact-preview">
          <div className="contact-column">
            <span className="fas fa-map-marker-alt"></span>
            <h2 className="column-title">Our Store</h2>
            <div className="column-info">
              <p>500 Terry Francois Street</p>
              <p>San Francisco, CA 94158</p>
              <p>info@mysite.com | Tel. 123-456-7890</p>
              <a className="scrollToElement" href="#google-map">
                View Map >
              </a>
            </div>
          </div>
          <span className="contact-divider"></span>
          <div className="contact-column">
            <span className="fas fa-clock"></span>
            <h2 className="column-title">Opening Hours</h2>
            <div className="column-info">
              <p>Monday - Friday: 11.00 - 18.30</p>
              <p>Saturday: 11.00 - 17.00</p>
              <p>Sunday: 12.30 - 16.30 </p>
            </div>
          </div>
        </div>
        <div className="contact-field">
          <div className="contact-field-wrapper">
            <p className="contact-field-header">
              You can also email us at: info@mysite.com or fill in our contact
              form:
            </p>
            <form
              autoComplete="on"
              method="GET"
              id="contact-submit"
              className="contact-form"
            >
              <label htmlFor="fname"></label>
              <input placeholder="Name" type="text" id="fname" required />
              <label htmlFor="email"></label>
              <input placeholder="Email" type="email" id="email" required />
              <label htmlFor="subject"></label>
              <input placeholder="Subject" type="text" id="subject" />
            </form>
            <div className="message-field">
              <textarea
                className="default contact-area"
                maxLength="250"
                placeholder="Message"
              ></textarea>
              <button
                form="contact-submit"
                type="submit"
                className="defaultButton alt-button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="location-map">
          <iframe
            id="google-map"
            title="location"
            src="https://www.google.com/maps/embed/v1/view?zoom=11&center=37.7749%2C-122.4194&key=AIzaSyCoHM9r2cvnU_5M2g2Mk4ia0aH2nIHmT1o"
            allowFullScreen={true}
          ></iframe>
        </div>
      </main>
    </section>
  );
}
export default Contact;
