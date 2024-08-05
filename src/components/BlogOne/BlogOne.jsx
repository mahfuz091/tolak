'use client'
import blogOneData from '@/data/BlogOneData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const TinySlider = dynamic(() => import("tiny-slider-react"), {
    ssr: false,
});

const settings = {
    items: 1,
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    nav: false,
    mouseDrag: true,
    controls: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
}

const { tagLine, title, carouselData } = blogOneData

const BlogOne = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="blog-one">
            <Container >
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                    <h3 className="sec-title__title">{title}</h3>
                </div>
                <TinySlider settings={settings} className="main-slider-one__carousel">
                    {carouselData.map(({ id, image, link, href, date, year, comments, title, text }) =>
                        <div key={id} className="item">
                            <div className="blog-card wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='00ms'>
                                <div className="blog-card__image">
                                    <Image src={image} alt={title} />
                                    <Image src={image} alt={title} />
                                    <Link href={href} className="blog-card__image__link"><span className="sr-only">{link}</span></Link>

                                </div>
                                <div className="blog-card__bg"></div>
                                <div className="blog-card__meta">
                                    <div className="blog-card__meta__date" dangerouslySetInnerHTML={{ __html: date }}></div>
                                    <div className="blog-card__meta__year">2023</div>
                                    <div className="blog-card__meta__comments">
                                        <i className="icofont-speech-comments"></i>Comments ({comments})
                                    </div>
                                </div>
                                <div className="blog-card__content">
                                    <h3 className="blog-card__title"><Link href={href}>{title}</Link></h3>
                                    <p className="blog-card__text">{text}</p>
                                    <Link href={href} className="blog-card__link">
                                        Read more
                                        <i className="icofont-rounded-double-right"></i>
                                    </Link>
                                </div>
                                <div className="blog-card__border"></div>
                            </div>
                        </div>)}
                </TinySlider>


            </Container>
        </section >
    );
};

export default BlogOne;