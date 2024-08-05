'use client'
import clientCarouselData from '@/data/ClientCarouselData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const ClientCarousel = () => {
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const settings = {
        items: 5,
        gutter: 30,

        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        mouseDrag: true,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,

        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            575: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }
    return (
        <div className="client-carousel no-border">
            <Container >
                <TinySlider settings={settings} className="client-carousel__one">
                    {
                        clientCarouselData.map(({ id, bg, hoverBg }) =>
                            <div key={id}>
                                <div className="client-carousel__one__item">
                                    <Image className="client-carousel__one__item__normal" src={bg} alt=" tolak" />
                                    <Image className="client-carousel__one__item__hover" src={hoverBg} alt="tolak" />
                                </div>
                            </div>

                        )
                    }
                </TinySlider>

            </Container>
        </div>

    );
};

export default ClientCarousel;