import contactOneData from '@/data/ContactOneData';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { infoIcon,
    infoTitle,
    image,
    bg,
    texts,
    tagLine,
    imageTwo,
    title,
    text } = contactOneData;
const inputs = ["name", "email", "message"];
const ContactOne = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const fromData = new FormData(e.target);
        const data = {};
        inputs.forEach((input) => (data[input] = fromData.get(input)));
        console.log(data);
    };
    return (
        <section className="contact-one">
            <Container >
                <Row>
                    <Col lg={8} >
                        <div className="contact-one__info wow fadeInLeft" data-wow-delay="100ms">
                            <div className="contact-one__info__icon"><span className={infoIcon}></span></div>
                            <h3 className="contact-one__info__title" dangerouslySetInnerHTML={{ __html: infoTitle }}></h3>
                            <p className="contact-one__info__text">
                                {
                                    texts.map(({ id, title, subHref }) => <Link key={id} href={`${subHref}:${title}`}>
                                        {title}
                                    </Link>)
                                }

                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="contact-one__image wow fadeInRight" data-wow-delay="200ms">
                            <Image src={image} alt="tolak" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="contact-one__container wow fadeInUp" data-wow-delay="100ms">
                <div className="contact-one__wrapper" style={{ backgroundImage: `url(${bg.src})` }}>
                    <Row >
                        <Col lg={6} className="col-lg-6">
                            <div className="contact-one__image-two">
                                <Image src={imageTwo} alt="tolak" />
                            </div>
                        </Col>
                        <Col lg={6} className="col-lg-6">
                            <div className="contact-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline"><span className="sec-title__tagline__left"></span>{tagLine}<span className="sec-title__tagline__right"></span></h6>
                                    <h3 className="sec-title__title">{title}</h3>
                                </div>
                                <p className="contact-one__content__text">
                                    {
                                        text.split("\n").map((t, i) => <Fragment key={i}>{t} <br /></Fragment>)
                                    }

                                </p>
                                <form onSubmit={handleSubmit} className="contact-one__form contact-form-validated form-one" >
                                    <div className="form-one__group">
                                        <div className="form-one__control">
                                            <input type="text" name="name" placeholder="Your Name" />
                                        </div>
                                        <div className="form-one__control">
                                            <input type="email" name="email" placeholder="Email address" />
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <button type="submit" className="tolak-btn"><b>Send Request</b><span></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section >
    );
};

export default ContactOne;