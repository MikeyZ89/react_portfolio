import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            
            <h1>Mike Zlotkowski</h1>
            <h6>GitHub: MikeyZ89</h6>
            <h6>Phone: 602-370-6110</h6>
            <h6>Email: Michael.Zlotkowski@gmail.com</h6>

            <p>I'm new to the world of Web Development, my story always faught going back to school and Covid-19 changed the days of me working behind a bar as stable employment. Now I find myself diving head first into a full stack engineer role with the experience so far in the MERN STACK (MongoDB, Express, React, Node JS). Development was something I was always interested in, but finally took the leap and I'm loving every minute of it.</p>

            <p>My goal is to have a mastery level with coding and be able to spin up just about anything I can think of with ease. For now I have enjoyed learning the core of JavaScript leading me towards working through a deeper understanding of React.</p>

            <p>My latest project, Employee_Directory, is a searchable sortable employee directory. You can check it out <a href="https://mikeyz89.github.io/employee_directory/" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. That application was built with React utilizing API's to randomly generate the list of Employees.</p>

            <p>When I'm not coding or learning about coding, I am a musician and the small shameless plug is a song of mine which you can check out <a href="https://www.youtube.com/watch?v=9IuAOeLh_do" target="_blank" rel="noopener noreferrer">here</a>, Cheers!</p>
            <br></br>
            <h4>EXPERIENCE:</h4>
            <br></br>
            <h5>Web Development / Digital Marketing</h5>
            <h6>GoDaddy - Web Sales and Marketing</h6>
            <h6>Protege Branding - Web Sales and Marketing</h6>
            <h6>Vertical Partners West - Technical Customer Service Rep</h6>
            <h6>DDI - Account Manager Marketplace Specialist</h6>
            <br></br>
            <h5>Hospitality</h5>
            <h6>Arizona Wilderness Brewing Company - Bartender</h6>
            <h6>Old Ellsworth Brewing Company - Bartender</h6>
            <br></br>
            <h5>Human Resources</h5>
            <h6>Pain Doctor - Recruiting Manager</h6>
            <br></br>
            <h5>SKILLS:</h5>
            <h6>CSS / HTML</h6>
            <h6>NodeJS</h6>
            <h6>ReactJS</h6>
            <h6>MongoDB</h6>
            <h6>JavaScript</h6>
            <br></br>
            <a href="https://drive.google.com/file/d/1t2G97X33wwA5kukRqXG6vPSYFPI43gEk/view?usp=sharing">RESUME</a>
            <br></br>
            <br></br>

            </Content>

        </div>
    );

}

export default AboutPage;