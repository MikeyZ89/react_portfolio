import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GraphicsPage from './pages/GraphicsPage';
import ContactPage from './pages/ContactPage';
import mzlogo from './assets/images/mzlogo.png';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mike Zlotkowski',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Graphics', path: '/graphics'},
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Mike Zlot',
        text: 'React Web Development / Graphic Design Portfolio'
      },
      about: {
        title: 'About Me'
      },
      graphics: {
        title: 'Graphic Design'
      },
      contact: {
        title: 'Contact'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand><img src={mzlogo} alt="MZ Logo" height="auto" width="90px"/></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/graphics">Graphics</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/graphics" render={() => <GraphicsPage title={this.state.graphics.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;