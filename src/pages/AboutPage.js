import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            
            <h1>Mike Zlotkowski</h1>
            <a href="https://www.tappy.tech/mikez">Contact Info</a>
            <br></br>
            <br></br>

            <p>A recent graduate from the University of Arizona Coding Bootcamp specializing in the MERN stack, and aspiring graphic artist. I have always been in some sort of creative capacity with every company I represent to bring their vision to life.</p>

            <p>During my bootcamp my front end visual skills shined and I've been sharpening my experience within the Adobe Suite. My goal as a Developer is to have a mastery level with coding and be able to spin up just about anything I can think of with ease.</p>

            <p>When I'm not coding or designing, I am a musician and the small shameless plug is a song of mine which you can check out <a href="https://www.youtube.com/watch?v=9IuAOeLh_do" target="_blank" rel="noopener noreferrer">here</a>, Cheers!</p>
            <br></br>
            <h4>EXPERIENCE:</h4>
            <br></br>
            <h5>Web Development / Digital Marketing</h5>
            <h6>GoDaddy - Web Sales and Marketing</h6>
            <h6>Protege Branding - Web Sales / Branding Consultant</h6>
            <h6>Vertical Partners West - Technical Customer Service Rep</h6>
            <h6>DDI - Account Manager Marketplace Specialist</h6>
            <h6>GSI - Key Account Manager North and South American Market</h6>

            <br></br>
            <h5>Hospitality</h5>
            <h6>Arizona Wilderness Brewing Company - Bartender</h6>
            <h6>Old Ellsworth Brewing Company - Bartender</h6>
            <br></br>
            <h5>Human Resources</h5>
            <h6>Pain Doctor - Recruiting Manager / Project Lead</h6>
            <br></br>
            <h5>SKILLS:</h5>
            <h6>CSS / HTML</h6>
            <h6>NodeJS</h6>
            <h6>ReactJS</h6>
            <h6>MongoDB</h6>
            <h6>Photography</h6>
            <h6>Adobe Suite</h6>
            <h6>Shopify</h6>
            <h6>Liquid</h6>
            <br></br>
            <a href="https://drive.google.com/file/d/1t2G97X33wwA5kukRqXG6vPSYFPI43gEk/view?usp=sharing">RESUME</a>
            <br></br>
            <br></br>

            </Content>

        </div>
    );

}

export default AboutPage;