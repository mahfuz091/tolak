'use client'
import headerData from '@/data/HeaderData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';
import NavItems from './NavItems';
import { useRootContext } from '@/Provider/context';
import MegaMenu from '../MegaMenu/MegaMenu';
import useScroll from '@/hooks/uaeScroll';

const { navItems, main_logo } = headerData


const Header = () => {
    const scrollTop = useScroll(130);
    const { toggleSearch, handleToggle, toggleSidebar } = useRootContext()
    return (
        <header className="main-header sticky-header sticky-header--normal">
            <Container fluid>
                <div className="main-header__inner">
                    <div className="main-header__logo">
                        <Link href="/">
                            <Image src={main_logo} alt="Tolak HTML" width={184} style={{ height: 'auto' }} />
                        </Link>
                    </div>

                    <nav className="main-header__nav main-menu">
                        <ul className="main-menu__list">

                            <MegaMenu />

                            {navItems.map(item => <NavItems key={item.id} item={item} />)}

                            <li className="dot"></li>
                        </ul>
                    </nav>
                    <div className="main-header__right">
                        <div onClick={handleToggle} className="mobile-nav__btn mobile-nav__toggler">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link href="#" onClick={toggleSearch} className="search-toggler main-header__search">
                            <i className="icon-magnifying-glass" aria-hidden="true"></i>
                            <span className="sr-only">Search</span>
                        </Link>
                        <a href="cart.html" className="main-header__cart">
                            <i className="icon-shopping-cart" aria-hidden="true"></i>
                            <span className="sr-only">Search</span>
                        </a>
                        <a href="#" className="main-header__toggler" onClick={toggleSidebar}>
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </a>
                        <a href="contact" className="tolak-btn main-header__btn">
                            <b>Discover More</b><span></span>
                        </a>
                    </div>
                </div>
            </Container>
        </header>

    );
};

export default Header;