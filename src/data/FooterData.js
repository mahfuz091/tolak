import logo from "@/assets/images/logo-light.png";
import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import footerAbout from "@/assets/images/resources/footer-about.jpg";
import post1 from "@/assets/images/blog/lp-1-1.jpg";
import post2 from "@/assets/images/blog/lp-1-2.jpg";

import {
    faFacebookF,
    faInstagram,
    faPinterestP,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const widgetSocial = [
    { id: 1, icon: faFacebookF, href: "https://facebook.com", title: "Facebook" },
    { id: 2, icon: faPinterestP, href: "https://pinterest.com", title: "Pinterest" },
    { id: 3, icon: faTwitter, href: "https://twitter.com", title: "Twitter" },
    { id: 4, icon: faInstagram, href: "https://instagram.com", title: "Instagram" },
];

const posts = {
    title: "Recent Posts",
    posts: [
        {
            id: 1,
            image: post1,
            meta: "23 jun 2023",
            title: "We round solution york Blog",
            href: "blog-details"

        },
        {
            id: 2,
            image: post2,
            meta: "23 jun 2023",
            title: "We Should be Descriptive",
            href: "blog-details"

        }
    ]
}

const footerData = {
    footerBg,
    logo,
    shape,
    footerAbout,
    posts,
    widgetInfo: {
        time: "Open Hours of Government:\n Mon - Fri: 8.00 am. - 6.00 pm.",
        timeIcon: "icofont-clock-time",
        location: "13/A, Miranda Halim City .",
        locationIcon: "icofont-location-pin",
        tel: "099 695 695 35",
        telIcon: "icofont-phone",
        subHref: "tel",
    },
    widgetSocial,
    services: [
        { id: 1, href: "/about", title: "Why choose us" },
        { id: 2, href: "/aservices", title: "Our Service" },
        { id: 3, href: "/reviews", title: "Partners" },
        { id: 4, href: "/contact", title: "Core values" },
        { id: 5, href: "/project", title: "Our projects" },
    ],
    quickLinks: [
        { id: 1, href: "/gallery", title: "Gallery" },
        { id: 2, href: "/packages", title: "Packages" },
        { id: 3, href: "/team", title: "Team" },
        { id: 4, href: "/contact", title: "Contact" },
        { id: 5, href: "/blog-grid-right", title: "News" },
    ],
    bottomLinks: [
        { id: 1, href: "/about", title: "About Us" },
        { id: 2, href: "/services", title: "Services" },
        { id: 3, href: "/blog-list-right", title: "News" },
        { id: 4, href: "/portfolio", title: "Portfolio" },

    ],

};

export default footerData;
