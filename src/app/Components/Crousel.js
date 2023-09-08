import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class NextJs extends Component {
    render() {
        const carouselSettings = {
            autoPlay: true, // Enable automatic sliding
            interval: 3000,
            infiniteLoop: true,

        };
        return (
            <div style={{  overflow:'hidden' }}>
                <Carousel {...carouselSettings} style={{ zIndex: 0 }} showThumbs={false}>
                    <div>
                        <img src="/campus5a.jpg" alt="image1" />
                        <p className="legend relative ">Main Campus GCUF Faisalabad</p>
                    </div>
                    <div>
                        <img src="/campusb.jpg" alt="image2" />
                        <p className="legend">GCUF Sahiwal (Sub-Campus)</p>
                    </div>
                    <div>
                        <img src="campusb.jpg" alt="image3" />
                        <p className="legend">E-Rozgar Seminar</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default NextJs;
