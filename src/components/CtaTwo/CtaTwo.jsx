import ctaTwoData from '@/data/CtaTwoData';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { shape, bg, image, infoBg, texts, href, subHref, icon, title, contTitle, contText } = ctaTwoData

const CtaTwo = () => {
    return (
        <section className="cta-two">
            <div className="cta-two__shape" style={{ backgroundImage: `url(${shape.src})` }}></div>
            <Container >
                <div className="cta-two__bg" style={{ backgroundImage: `url(${bg.src})` }}>
                    <Row>
                        <Col lg={4} className=" wow fadeInLeft" data-wow-delay="100ms">
                            <div className="cta-two__info" style={{ backgroundImage: `url(${infoBg.src})` }}>
                                <div className="cta-two__info__icon"><span className={icon}></span></div>
                                <h4 className="cta-two__info__title">{title}</h4>
                                <p className="cta-two__info__text">
                                    {
                                        texts.map(({ id, title, subHref }) =>
                                            <Link key={id} href={`${subHref}:${title}`}>
                                                {title}
                                            </Link>)
                                    }

                                </p>
                            </div>
                        </Col>
                        <Col lg={4} >
                            <div className="cta-two__content">
                                <h4 className="cta-two__content__title">{contTitle} <Link href={`${subHref}:${href}`}>Call Now!</Link></h4>
                                <p className="cta-two__content__text">
                                    {contText.split("\n").map((t, i) => (
                                        <Fragment key={i}>
                                            {t} <br />
                                        </Fragment>
                                    ))}</p>
                                <Link className="cta-two__content__rm" href="contact">Read More<span className="fas fa-angle-double-right"></span></Link>
                            </div>
                        </Col>
                        <Col lg={4} className="wow fadeInUp position-relative" data-wow-delay="200ms">
                            <div className="cta-two__image">
                                <Image src={image} alt="tolak" />
                            </div>
                            <Link href={`${subHref}:${href}`} className="cta-two__call-text">Call Now</Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section >
    );
};

export default CtaTwo;