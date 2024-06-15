import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/particle'
import Techstack from "../components/skillset/techstack";
import Toolstack from "../components/skillset/toolstack";
import Leetcode from "../components/skillset/leetcode";
import Github from "../components/skillset/github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Leetcode />
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset