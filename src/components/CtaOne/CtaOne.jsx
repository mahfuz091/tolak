import ctaOneData from '@/data/CtaOneData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const {
    shapeLeft,
    shape,
    image,
    author1,
    author2,
    author3,
    icon,
    title,
    text,
    conText,
    conLinkText,
    href } = ctaOneData

const CtaOne = () => {
    return (
        <section className="cta-one">
            <div className="cta-one__bg">
                <div className="cta-one__bg__shape-left" style={{ backgroundImage: `url(${shapeLeft.src})` }}></div>
                <div className="cta-one__bg__shape" style={{ backgroundImage: `url(${shape.src})` }}></div>
            </div>
            <Container className="container">
                <Row className=" d-flex align-items-center">
                    <Col lg={7} className="wow fadeInLeft" data-wow-delay="100ms">
                        <div className="cta-one__image">
                            <Image src={image} alt="tolak" />
                        </div>
                    </Col>
                    <Col lg={5} className=" wow fadeInUp" data-wow-delay="100ms">
                        <div className="cta-one__content">
                            <div className="cta-one__box">
                                <div className="cta-one__box__icon"><span className={icon}></span></div>
                                <h3 className="cta-one__box__title">{title}</h3>
                                <p className="cta-one__box__text">{text}</p>
                            </div>
                            <div className="cta-one__author">
                                <Image src={author1} alt="tolak" />
                                <Image src={author2} alt="tolak" />
                                <Image src={author3} alt="tolak" />
                                <Link className="cta-one__author__rm" href={href}>More <span className="fas fa-arrow-right"></span></Link>
                            </div>
                            <p className="cta-one__content__text">{conText} <Link href={href}>{conLinkText}</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CtaOne;