import React from "react";
import { Link } from "react-router-dom";
import "./../Servicespage/Webdevelopement.css";

const WebApplication = () => {
  return (
    <div className="web-application">
      <header className="header3">
        <div className="breadcrumb">
          <p>  <Link to="/">Home</Link> &gt; About</p>
        </div>
        <h1>About Our Company</h1>
      </header>

      <section className="intro">
        <p>
          Pixalive tech Services is one of India’s fastest-growing Software Development Companies. L-IT 
          Truly Services is headquartered in Bangalore, India, with collaborative business operations in
          the USA & Malaysia.
        </p>
        <p>
          Pixalive tech Services works with leading global firms in Financial Services, Technology, Mobile
          Communications & Media, Airport Solutions, Manufacturing, and Retail domains. We engage 
          customers in a collaborative manner by being consultative and offering domain-specific solutions.
        </p>
        <p>
          Pixalive tech Services delivers highly responsive and innovative solutions that bridge our 
          client’s execution. We enable business transformation through the innovative use of technology.
          Our relationships with clients are based on shared values and goals. Flexible business models 
          encourage relationships that can grow and last. Innovation & Excellence through quality is not
          just a motto – it is the foundation on which L-IT Truly Services is built.
        </p>
      </section>

      <section className="expertise">
        <div className="expertise-category">
          <h3>Our Vision:</h3>
          <ul>
            <li>We help our clients meet their business needs</li>
            <li>Use cutting-edge state of the art technologies in our products</li>
            <li>Provide continuous robust support for our products post launch</li>
            <li>Transparency and speed at the heart of our communication with our clients</li>
          </ul>
        </div>

        <div className="expertise-category">
          <h3>Our Mission:</h3>
          <p>
            Our vision is to help companies improve & achieve success through revenue increase, 
            cost management & customer satisfaction.
          </p>
          <p>
            To have impeccable Integrity in all our business practices with our customers, our suppliers, 
            our employees, our investors, and the communities we work in. This means being Truthful and 
            honest at all times in every situation.
          </p>
        </div>
      </section>

      <footer className="footer1">
        <p>
          If you are looking for the right company to outsource, we are the
          {/* CHANGED '#' TO '/contact' SO IT WORKS AND GOES TO CONTACT PAGE */}
          best in the market. Why late, <a href="/contact">Let’s talk</a>.
        </p>
      </footer>
    </div>
  );
};

export default WebApplication;