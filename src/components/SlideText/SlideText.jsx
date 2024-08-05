'use client'
import slideTextData from '@/data/SlideTextData';
import React, { useEffect, useState } from 'react';
import JarallaxImage from '../Jarallax/JarallaxImage';
import dynamic from 'next/dynamic';


const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
    ssr: false,
});
const { bg, lists } = slideTextData

const SlideText = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section className="slide-text">
            <Jarallax className="slide-text__bg" speed={0.2} imgPosition="center cnter">
                <JarallaxImage src={bg.src} />
            </Jarallax>


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