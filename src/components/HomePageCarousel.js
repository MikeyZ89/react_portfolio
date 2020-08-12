import React from 'react';

import z from '../assets/images/z.png';
import mz from '../assets/images/mz.png';
import github from '../assets/images/github.png';

import HomePageCard from '../components/HomePageCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class HomePageCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Mike Zlotkowski',
                    subTitle2: 'Contact Me',
                    imgSrc: mz,
                    link: 'https://www.tappy.tech/mikez',
                    selected: false
                },
                {
                    id: 1,
                    title: 'MIKEZLOT.com',
                    subTitle: 'React Development',
                    subTitle1: 'Component Based Design',
                    imgSrc: z,
                    link: 'https://mikezlot.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'GitHub Profile',
                    subTitle: 'All My Most Recent Commits',
                    imgSrc: github,
                    link: 'https://github.com/MikeyZ89',
                    selected: false
                },
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
            return <HomePageCard item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
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

export default HomePageCarousel;