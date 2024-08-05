import slideTextData from '@/data/SlideTextData';
import React from 'react';
import { Parallax } from "react-parallax";
import Jarallax from '../Jarallax/Jarallax';
import JarallaxImage from '../Jarallax/JarallaxImage';
const { bg, lists } = slideTextData

const SlideText = () => {
    return (
        <section className="slide-text">
            <Jarallax className="slide-text__bg" speed={0.2} imgPosition="center cnter">
                <JarallaxImage src={bg.src} />
            </Jarallax>
            {/* <Parallax

                bgImage={bg.src}
                className='slide-text__bg'
            ></Parallax> */}

            <div className="slide-text__wrap">
                <ul className="slide-text__list list-unstyled">
                    {
                        lists.map((l, i) => <li key={i}>{l}</li>)
                    }

                </ul>
            </div>
        </section>
    );
};

export default SlideText;