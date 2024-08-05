import megamenuData from '@/data/MegamenuData';
import { useRootContext } from '@/Provider/context';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const { href, menuData } = megamenuData
const MegaMenu = () => {
    const { toggleMegaMenu, openMegaMenu } = useRootContext()
    const pathname = usePathname();
    // const href = 
    const current = pathname === href

    return (
        <li className={`megamenu megamenu-clickable megamenu-clickable--toggler ${current ? " current" : ""}`}>
            <Link href={href} onClick={toggleMegaMenu}>Demos</Link>
            <ul className={`${openMegaMenu ? 'megamenu-clickable--active' : ""}`}>
                <li>
                    <div className="megamenu-popup">
                        <a href="#" className="megamenu-clickable--close" onClick={toggleMegaMenu}><span className="icon-close"></span></a>

                        <div className="megamenu-popup__content">
                            <div className="demo-one">
                                <Container >
                                    <Row >
                                        {
                                            menuData.map(({ id, btns, image, title, new: isNew, href }) =>
                                                <Col key={id} md={6} lg={4}>
                                                    <div className="demo-one__card">
                                                        <div className="demo-one__image">
                                                            <Image src={image} alt="tolak" />
                                                            {isNew ? <span className="demo-one__image__new">{isNew}</span> : null}
                                                            <div className="demo-one__btns">
                                                                {btns.map(({ id, name, href }) =>
                                                                    <Link href={href} key={id} className="tolak-btn demo-one__btn">
                                                                        <b>{name}</b><span></span>
                                                                    </Link>)}


                                                            </div>
                                                        </div>
                                                        <div className="demo-one__content">
                                                            <h3 className="demo-one__title">
                                                                <Link href={href}>{title}</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </Col>)
                                        }

                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </li>
            </ul >
        </li >
    );
};

export default MegaMenu;