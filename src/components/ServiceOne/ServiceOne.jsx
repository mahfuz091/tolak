import serviceOneData from '@/data/ServiceOneData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { tagLine, title, items } = serviceOneData

const ServiceOne = () => {
    return (
        <section className="service-one">
            <Container>
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}e<span className="sec-title__tagline__right"></span></h6>
                    <h3 className="sec-title__title">{title}</h3>
                </div>
                <Row className="gutter-y-30">
                    {
                        items.map(({ id, image, title, icon, href, text }) => <Col key={id} md={6} lg={4} data-aos='fade-up'
                            data-aos-easing='linear'
                            data-aos-duration='1500'>
                            <div className="service-one__item text-center">
                                <div className="service-one__item__image">
                                    <Image src={image} alt="tolak" />
                                </div>
                                <div className="service-one__item__content">
                                    <div className="service-one__item__icon">
                                        <span className={icon}></span>
                                    </div>
                                    <h3 className="service-one__item__title">
                                        <Link href={href}>{title}</Link>
                                    </h3>
                                    <p className="service-one__item__text">
                                        {text}
                                    </p>
                                </div>
                                <div className="service-one__item__bottom">
                                    <div className="service-one__item__bottom__number"></div>
                                    <Link className="service-one__item__bottom__rm" href={href}>Read More<span className="fas fa-angle-double-right"></span></Link>
                                </div>
                            </div>

                        </Col>)
                    }

                </Row>
            </Container>
        </section >
    );
};

export default ServiceOne;