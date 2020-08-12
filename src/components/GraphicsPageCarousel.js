import React from 'react';

import ChoogleCardImage from '../assets/images/ChoogleCardImage.png';
import NoatsCardImage from '../assets/images/NoatsCardImage.png';
import TheshCardImage from '../assets/images/TheshCardImage.png';
import IllustrationsCardImage from '../assets/images/IllustrationsCardImage.png';
import VectorLogoCardImage from '../assets/images/VectorLogoCardImage.png';


import GraphicsPageCard from '../components/GraphicsPageCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class GraphicsPageCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Vector Logos and Graphics',
                    subTitle: 'Showcase Folder',
                    imgSrc: VectorLogoCardImage,
                    link: 'https://drive.google.com/drive/folders/13D8ZPzb_DYCE1cgEI91J-u8kj2DFx0Se?usp=sharing',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Noats',
                    subTitle: 'The Helpful Cook Book Note Taker',
                    subTitle1: 'Coding Bootcamp Project 2',
                    imgSrc: NoatsCardImage,
                    link: 'https://thawing-shore-71367.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Thesh',
                    subTitle: 'Private Branding Label',
                    imgSrc: TheshCardImage,
                    link: 'https://drive.google.com/drive/folders/1nUYnrmrmJLe3-ycZ4mNx1qW9vLLNxS1g?usp=sharing',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Choogle',
                    subTitle: 'Development Study Resource',
                    subTitle1: 'Coding Bootcamp Project 3',
                    imgSrc: ChoogleCardImage,
                    link: 'https://chooglefoo.herokuapp.com/login',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Digital Illustrations',
                    subTitle: 'Freehand Vectors',
                    imgSrc: IllustrationsCardImage,
                    link: 'https://drive.google.com/drive/folders/1SOzKE66VHFvKOAE-KU6usg1gzhpC2TJI?usp=sharing',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <GraphicsPageCard item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default GraphicsPageCarousel;