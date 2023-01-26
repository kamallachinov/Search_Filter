// import React, { Component } from "react";
// import Slider from "react-slick";
import styles from './Header.module.scss'
import image from '../../Assets/slider_background.jpg'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Header extends Component {

    render() {
        return (
            <Carousel showThumbs={false} className={styles.Carousel}>
                <div>
                    <img src={image} />
                    <div className={styles.div}><h1 className={styles.heading}>Get Your <span className={styles.span}>Education</span> today</h1></div>
                </div>
                <div>
                    <img src={image} />
                    <div className={styles.div}><h1 className={styles.heading}>Get Your <span className={styles.span}>Education</span> today</h1></div>
                </div>
                <div>
                    <img src={image} />
                    <div className={styles.div}><h1 className={styles.heading}>Get Your <span className={styles.span}>Education</span> today</h1></div>
                </div>
            </Carousel>
        );
    }
};
export default Header