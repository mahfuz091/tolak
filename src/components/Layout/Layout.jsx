'use client'
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from '../CustomCursor/CustomCursor';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import TopBar from '../TopBar/TopBar';
import Search from '../Search/Search';
import MobileNav from '../MobileNav/MobileNav';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import ScrollTop from '../ScrollTop/ScrollTop';


const Layout = ({ children }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <CustomCursor />
            <Preloader />
            <div className='page-wrapper'>
                <TopBar />
                <Header />
                {children}
                <Footer />
            </div>
            <MobileNav />
            <Search />
            <Sidebar />
            <ScrollTop />

        </>
    );
};

export default Layout;