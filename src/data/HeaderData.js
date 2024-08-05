import main_logo from "@/assets/images/logo-dark.png";
import logo_light from "@/assets/images/logo-light.png";


import {
  faTwitter,

  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMap,

  faEnvelopeOpen,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const sidebarOneText = "Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ puru rhoncu tincidunt odio ultrices.Sed feugiat feugiat felis."

const navItems = [
  {
    id: 1,
    name: "About",
    href: "/about",


  },
  {
    id: 2,
    name: "Pages",
    href: "#",
    subNavItems: [
      {
        id: 1,
        name: "Our Project",
        href: "/project",
        dropdown: false,
        subItems: [
          {
            id: 1,
            name: "Project Page",
            href: "/project"
          },
          {
            id: 2,
            name: "Project Carousel",
            href: "/project-carousel"
          },
          {
            id: 3,
            name: "Project Details",
            href: "/project-details"
          }
        ]
      },
      { id: 2, name: "Our Team", href: "/team" },
      { id: 3, name: "Team Carousel", href: "/team-carousel" },
      { id: 4, name: "Team Details", href: "/team-details" },
      { id: 5, name: "Testimonial Carousel", href: "/reviews" },
      { id: 6, name: "Pricing Page", href: "/packages" },
      { id: 7, name: "Pricing Carousel", href: "/packages-carousel" },
      {
        id: 8,
        name: "Gallery",
        href: "/gallery",
        dropdown: false,
        subItems: [
          {
            id: 1,
            name: "Gallery Masonry",
            href: "/gallery"
          },
          {
            id: 2,
            name: "Gallery Filter",
            href: "/gallery-filter"
          },
          {
            id: 3,
            name: "Gallery Grid",
            href: "/gallery-grid"
          },
          {
            id: 4,
            name: "Gallery Carousel",
            href: "/gallery-carousel"
          }
        ]
      },
      { id: 9, name: "FAQs", href: "/faq" },
      { id: 10, name: "Login", href: "/login" },
      { id: 11, name: "404 Error", href: "/404" },
    ],
  },
  {
    id: 3,
    name: "Services",
    href: "#",
    subNavItems: [
      { id: 1, name: "Services One", href: "/services" },
      { id: 2, name: "Services One Carousel", href: "/services-carousel" },
      { id: 3, name: "Services Two", href: "/services-two" },
      { id: 4, name: "Services Two Carousel", href: "/services-two-carousel" },
      { id: 5, name: "Business of Growth", href: "/business-growth" },
      { id: 6, name: "Solution to Business", href: "/business-solution" },
      { id: 7, name: "Markting of Solution", href: "/marketing-solution" },
      { id: 8, name: "Technology Services", href: "/technology-services" },
      { id: 9, name: "Marketing Business", href: "/business-marketing" },
      { id: 10, name: "Support of Business", href: "/business-support" },
    ],
  },

  {
    id: 4,
    name: "Shop",
    href: "#",
    subNavItems: [
      {
        id: 1,
        name: "Products",
        href: "#",
        dropdown: true,
        subItems: [
          {
            id: 1,
            name: "No Sidebar",
            href: "/products"
          },
          {
            id: 2,
            name: "Left Sidebar",
            href: "/products-left"
          },
          {
            id: 3,
            name: "Right Sidebar",
            href: "/products-right"
          }
        ]
      },
      { id: 2, name: "Products Carousel", href: "/products-carousel" },
      { id: 3, name: "Product Details", href: "/product-details" },
      { id: 4, name: "Cart", href: "/cart" },
      { id: 5, name: "Checkout", href: "/checkout" },
    ],
  },
  {
    id: 5,
    name: "News",
    href: "#",
    subNavItems: [
      {
        id: 1, name: "News Grid", href: "#", dropdown: true,
        subItems: [
          {
            id: 1,
            name: "No Sidebar",
            href: "/blog-grid"
          },
          {
            id: 2,
            name: "Left Sidebar",
            href: "/blog-grid-left"
          },
          {
            id: 3,
            name: "Right Sidebar",
            href: "/blog-grid-right"
          }
        ]
      },
      {
        id: 2, name: "News List", href: "#", dropdown: true,
        subItems: [
          {
            id: 1,
            name: "No Sidebar",
            href: "/blog-list"
          },
          {
            id: 2,
            name: "Left Sidebar",
            href: "/blog-list-left"
          },
          {
            id: 3,
            name: "Right Sidebar",
            href: "/blog-list-right"
          }
        ]
      },
      { id: 3, name: "News Carousel", href: "/blog-carousel" },
      {
        id: 4, name: "News Details", href: "#", dropdown: true,
        subItems: [
          {
            id: 1,
            name: "No Sidebar",
            href: "/blog-details"
          },
          {
            id: 2,
            name: "Left Sidebar",
            href: "/blog-details-left"
          },
          {
            id: 3,
            name: "Right Sidebar",
            href: "/blog-details-right"
          }
        ]
      },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",

  },
];

const social = [
  { icon: faFacebookF, link: "https://facebook.com" },
  { icon: faPinterestP, link: "https://pinterest.com" },
  { icon: faTwitter, link: "https://twitter.com" },
  { icon: faInstagram, link: "https://instagram.com" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: faEnvelope,
      content: "demo@example.com",
      subHref: "mailto",
    },
    {
      id: 2,
      icon: faMapMarkerAlt,
      content: "27, Dhaka London City, LOT",
      href: "https://www.google.com/maps",
    },




  ],

  sidebarOneIcons: [
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      content: "27, Dhaka London City Dhaka, Bangladesh",

    },
    {
      id: 2,
      icon: 'fas fa-clock',
      content: "Mon - Fri: 8.00 am. - 6.00 pm.",

    },
    {
      id: 3,
      icon: "fas fa-envelope",
      content: "27, Dhaka London City Dhaka, Bangladesh",
      href: "https://www.google.com/maps",
    },
  ],
  links: [
    {
      id: 1,
      name: "Login",
      href: "login"
    },
    {
      id: 2,
      name: "Registration",
      href: "contact"
    },
    {
      id: 3,
      name: "Services",
      href: "services"
    }
  ],
  navItems,
  social,
  main_logo,
  logo_light,
  sidebarOneText
};

export default headerData;
