import React from "react";
import './Home.css'
import About from '../About/About'
import Intro from "./Intro";
import { NavLink } from "react-router-dom";
import img from "../../assets/girl.png"


const Home = () => {
  return (
    <div className='bg-dark'>
      <section className="container  py-4 ">
        <div className="row">
          <div className="col-md-5 mt-5">
            <span className="display-5 mb-4 text-white">Hey! I am</span>
            <h1 className="display-4 mb-4 text-info ">
             Selvarani
            </h1>
            <h2 className="display-5 mb-4 text-warning">
            <Intro />
          </h2>
          <br />
            <p className="lead lh-base mb-5 text-white text-justify text-lg-left">
              Build websites and ensure they perform reliably and efficiently.
              Designing user interfaces and navigation menus. Writing and
              reviewing code for sites, typically HTML, XML, or JavaScript.
              Integrating multimedia content onto a site. Testing web
              applications. Troubleshooting problems with performance or user
              experience Collaborating with designers, and developers
            </p>
            <NavLink
              className="btn btn-outline-warning me-4 mb-5"
              to="/contact"
              role="button"
            >
              Hire Me
            </NavLink>
            <NavLink className="btn btn-warning mb-5" to="/about" role="button">
             Download CV
            </NavLink>
            {/* // animation */}

          <div className="hero-shape custom-animation">
            <img
              src="https://www.svgrepo.com/show/425253/balls-footbal.svg"
              alt="circle-animation"
              height="50"
              width="50"
              style={{ opacity: "0.5" }}
            />
          </div>
          
          </div>

      
          {/* // image */}

          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <img src={img} alt="" height="300px" width="300px" />
          </div>

          {/* // Image end */}
        </div>
      </section>
     <About />
    </div>
  );
};

export default Home;
