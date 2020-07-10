import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import mzlogo from '/Users/mz/code/homework/react_portfolio/project_3/src/assets/images/mzlogo.png';
import Background from '/Users/mz/code/homework/react_portfolio/project_3/src/assets/images/ocean.jpg';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mike Zlotkowski',
      backgroundImage: `url(${Background})`,
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Project 3',
        subTitle: 'Web Application',
        text: 'Mike Zlotkowski, Kate Meersman, Marcus Travis, Danny Molina-Power'
      },
      contact: {
        title: 'Any Questions?'
    
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand><img src={mzlogo} alt="MZ Logo" height="70px" width="90px"/></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;