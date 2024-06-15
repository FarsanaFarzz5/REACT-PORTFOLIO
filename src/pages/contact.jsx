import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/particle';
import ContactForm from '../components/contact/contact';
import Social from '../components/contact/social';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact