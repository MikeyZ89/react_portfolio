import React from 'react';

import Hero from '../components/Hero';

import GraphicsPageCarousel from '../components/GraphicsPageCarousel';

function GraphicsPage (props) {

    return(
        <div>
            <Hero title={props.title} />

            <GraphicsPageCarousel />
        </div>
    );

}

export default GraphicsPage;