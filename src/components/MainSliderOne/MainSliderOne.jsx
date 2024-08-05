'use client'
import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import mainSliderOneData from '@/data/MainSlederOneData';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const MainSliderOne = () => {
    const [mounted, setMounted] = useState(false);

    const [counterOn, setCounterOn] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const settings = {
        lazyload: true,
        mode: "gallery",
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        animateDelay: 5000,
        slideBy: "page",
        nav: true,
        mouseDrag: true,
        loop: true,
        items: 1,
        autoplay: false,
        autoplayTimeout: 7000,
        autoHeight: true,
        controls: false,

        gutter: 0,
        autoplayButton: false,
        autoplayButtonOutput: false,

    };


    return (
        <section className="main-slider-one">
            <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
            >

                <TinySlider settings={settings} className="main-slider-one__carousel">
                    {
                        mainSliderOneData.map(({ id, shape, bg, subTitle, title, text, social }) =>
                            < div className="item" key={id} >
                                <div className="main-slider-one__item">

                                    <div className="main-slider-one__shape tolak-tilt" data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 7, "speed": 700, "scale": 1 }'>
                                        <Image src={shape} alt="tolak" />

                                    </div>
                                    <div className="main-slider-one__bg" style={{ backgroundImage: `url(${bg.src})` }}></div>
                                    <svg className="main-slider-one__bg-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect className="circle0 steap" x="5.2%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle1 steap" x="15.6%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle2 steap" x="26%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle3 steap" x="36.4%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle4 steap" x="46.8%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle5 steap" x="57%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle6 steap" x="67.7%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle7 steap" x="78.1%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle8 steap" x="88.5%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                        <rect className="circle9 steap" x="100%" y="0" rx="0" ry="0" width="100%" height="100%" />
                                    </svg>

                                    <Container >
                                        <Row >
                                            <Col md={12} >
                                                <div className="main-slider-one__content">
                                                    <h5 className="main-slider-one__sub-title">{subTitle}</h5>
                                                    <h2 className="main-slider-one__title" dangerouslySetInnerHTML={{ __html: title }}></h2>
                                                    <div className="main-slider-one__text">
                                                        <p className="main-slider-one__text__one" dangerouslySetInnerHTML={{ __html: text }}></p>
                                                    </div>
                                                    <div className="main-slider-one__bottom">

                                                        <div className="main-slider-one__btn">
                                                            <a href="services.html" className="tolak-btn tolak-btn--base"><b>Contact Now</b><span></span></a>
                                                        </div>
                                                        <div className="main-slider-one__social">
                                                            {
                                                                social.map(({ id, link, icon, name }) =>


                                                                    <Link key={id} href={link}>
                                                                        <FontAwesomeIcon icon={icon} />
                                                                        <span className="sr-only">{name}</span>
                                                                    </Link>
                                                                )
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </Col >
                                        </Row>
                                    </Container>




                                    <div className="main-slider-one__floating-text">Tolak</div>

                                </div>
                            </div >
                        )
                    }
                </TinySlider>


                <div className="main-slider-one__project wow fadeInUp" data-wow-delay="200ms">
                    <div className="main-slider-one__project__icon"><span className="icon-check-mark"></span></div>

                    <h5 className="main-slider-one__project__number count-box">
                        {counterOn && (
                            <CountUp className='count-text' end={1283} duration={1.5} />
                        )}

                        k+</h5>
                    <p className="main-slider-one__project__title">Complete Projects</p>
                </div>
            </ScrollTrigger>
        </section >
    );
};

export default MainSliderOne;