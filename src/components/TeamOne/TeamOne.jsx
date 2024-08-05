'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import teamOneData from '@/data/TeamOneData';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});


const { tagLine, title, carouselData } = teamOneData



const TeamOne = () => {
    const [mounted, setMounted] = useState(false);

    const [counterOn, setCounterOn] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const settings = {
        items: 1,
        margin: 0,
        loop: false,
        smartSpeed: 700,
        nav: false,
        controls: false,
        mouseDrag: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                gutter: 0
            },
            768: {
                items: 2,
                gutter: 30
            },
            992: {
                items: 3,
                gutter: 30
            }
        }
    }


    return (
        <section className="team-one">
            <Container>
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                    <h3 className="sec-title__title">{title}</h3>
                </div>
                <TinySlider settings={settings} className="team-one__carousel">
                    {
                        carouselData.map(({ id, image, socials, title, href, designation }) =>
                            <div key={id} className="item">
                                <div className="team-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className="team-card__image">
                                        <Image src={image} alt={title} style={{ height: "auto" }} />
                                    </div>
                                    <div className="team-card__content">
                                        <div className="team-card__hover">
                                            <div className="team-card__social">
                                                <i className="fa fa-plus"></i>
                                                <div className="team-card__social__list">
                                                    {
                                                        socials.map(({ id, icon, title, link }) => <Link key={id} href={link}>

                                                            <FontAwesomeIcon icon={icon} />
                                                            <span className="sr-only">{title}</span>
                                                        </Link>)
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="team-card__title">
                                            <Link href={href}>{title}</Link>
                                        </h3>
                                        <p className="team-card__designation">{designation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TinySlider>



            </Container>
        </section >
    );
};

export default TeamOne;