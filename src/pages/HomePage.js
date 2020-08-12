import React from 'react';

import Hero from '../components/Hero';

import HomePageCarousel from '../components/HomePageCarousel';

function HomePage (props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <HomePageCarousel />
        </div>
    );

}

export default HomePage;