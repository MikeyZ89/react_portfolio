import React from 'react';

import GraphicsPageCardInfo from '../components/GraphicsPageCardInfo.js';

function GraphicsPageCard (props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <GraphicsPageCardInfo title={props.item.title} subTitle={props.item.subTitle} subTitle1={props.item.subTitle1} subTitle2={props.item.subTitle2} link={props.item.link} /> }
        </div>
    );

}

export default GraphicsPageCard;