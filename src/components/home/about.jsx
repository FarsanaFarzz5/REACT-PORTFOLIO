import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from 'react-parallax-tilt';

import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Farsana H </span>
                  and I'm from <span className="yellow"> Palakkad,Kerala</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in Computer Science and Engineering in 2023.
                <br />
                <br />
                  
                
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />
                 
                  I have a passion for working in <b className="yellow"></b> html5,css,bootstrap ver.4,
                 
                      modern Javascript libraries and frameworks like
                  
                     React.js
                  
                  <br />
                  <br />
                  I am also interested in learning new skills
                  <i>
                    <b className="yellow"> Web Technologies  </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/FarsanaFarzz5"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
           
                  <li className="social-icons">
                    <a
                      href="linkedin.com/in/farsana-h-067399301"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
             
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About