'use client'
import funFactOneData from '@/data/FunFactOne';
import Image from 'next/image';
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import { Tilt } from 'react-tilt'
const { accordionData, image, items, shape } = funFactOneData
const FunFactOne = () => {
    const [counterOn, setCounterOn] = useState(false);
    const defaultOptions = {

        maxTilt: 9,
        scale: 1,
        speed: 700,
        glare: false,
        maxGlare: 0

    }
    return (
        <section className="funfact-one">
            <Container >
                <Row >
                    <Col lg={6} >
                        <ScrollTrigger
                            onEnter={() => setCounterOn(true)}
                            onExit={() => setCounterOn(false)}
                        >
                            <div className="funfact-one__image">
                                <Image src={image} alt="tolak" />
                                <Image className="funfact-one__image__shape" src={shape} alt="tolak" />

                                {
                                    items.map(({ id, text, count, identity }) => <Tilt key={id} className={`funfact-one__item count-box tolak-tilt ${identity}`} options={defaultOptions}>



                                        <h3 className="funfact-one__item__count " >
                                            {counterOn && (
                                                <CountUp className='count-text' end={count} duration={1.5} />
                                            )}k+</h3>
                                        <p className="funfact-one__item__text">{text}</p>

                                    </Tilt>)
                                }


                            </div>
                        </ScrollTrigger>
                    </Col>
                    <Col lg={6} >
                        <div className="funfact-one__accordion tolak-accrodion">
                            <Accordion defaultActiveKey='1'>
                                {accordionData.map((accordion, index) => (
                                    <Accordion.Item
                                        key={accordion.id}
                                        eventKey={index.toString()}
                                    >
                                        <Accordion.Header

                                        >
                                            <i className="fa fa-check-circle"></i>
                                            {accordion.header}
                                            <span className='accrodion-title__icon'></span>
                                        </Accordion.Header>
                                        <Accordion.Body  >
                                            <div className="inner">
                                                <p>
                                                    There are many variations of passages of is psum available, but the majority have suffered alteration in some we form,
                                                    by injected humour,
                                                </p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>

                        {/* <div className="funfact-one__accordion tolak-accrodion" data-grp-name="tolak-accrodion">
                            <div className="accrodion">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        Maecenas facilisis erat id odio
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div><!-- /.accordian-title -->
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>
                                            There are many variations of passages of is psum available, but the majority have suffered alteration in some we form,
                                            by injected humour,
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item -->
                            <div className="accrodion active">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        Phasellus et vehicula nulla
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div><!-- /.accordian-title -->
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>
                                            There are many variations of passages of is psum available, but the majority have suffered alteration in some we form,
                                            by injected humour,
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item -->
                            <div className="accrodion">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        Maecenas malesuada
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div><!-- /.accordian-title -->
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>
                                            There are many variations of passages of is psum available, but the majority have suffered alteration in some we form,
                                            by injected humour,
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item -->
                            <div className="accrodion">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        Why you join our team
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div><!-- /.accordian-title -->
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>
                                            There are many variations of passages of is psum available, but the majority have suffered alteration in some we form,
                                            by injected humour,
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item -->
                            <div className="accrodion">
                                <div className="accrodion-title">
                                    <h4>
                                        <i className="fa fa-check-circle"></i>
                                        Maecenas malesuada
                                        <span className="accrodion-title__icon"></span><!-- /.accrodion-title__icon -->
                                    </h4>
                                </div><!-- /.accordian-title -->
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>
                                            There are many variations of passages of is psum available, but the majority have suffered alteration in some we form,
                                            by injected humour,
                                        </p>
                                    </div><!-- /.accordian-content -->
                                </div>
                            </div><!-- /.accordian-item -->
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default FunFactOne;