
import { FiShoppingBag } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import { LuBox } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Burger from "../assets/burger.png";
import Pizza from "../assets/pizza.png";
import FrenchFries from "../assets/french-fry.png";
import Chicken from "../assets/fried-shrimp.png";

const navItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/'
    },
    {
        name: 'Portfolio',
        path: '/'
    },
    {
        name: 'Clients',
        path: '/'
    },
    {
        name: 'Blog',
        path: '/'
    },
    {
        name: 'Contact',
        path: '/'
    }
];

const buttonNames = [
    {
        id: 1,
        name: "About",
        title: "Exceptional culinary experience and delicious food",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
        button: "About More",
        contact: "+88 3426 739 485"
    },
    {
        id: 2,
        name: "Experience",
        title: "Unforgettable dining experience with exquisite flavors",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
        button: "Experience More",
        contact: "+88 3426 739 485"
    },
    {
        id: 3,
        name: "Contact",
        title: "Get in touch with us for more information and booking",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
        button: "Contact Us",
        contact: "+88 3426 739 485"
    },
];

const aboutItems = [
    {
        id: 1,
        image: <LuBox className="text-red text-[35px]" />,
        title: "Fast Delivery",
        description: "Within 30 minutes"
    },
    {
        id: 2,
        image: <SlBadge className="text-red text-[35px]" />,
        title: "Absolute Dining",
        description: "Best buffet restaurant"
    },
    {
        id: 3,
        image: <FiShoppingBag className="text-red text-[35px]" />,
        title: "Pickup Delivery",
        description: "Grab your food order"
    }
]

const popularItemData = [
    {
        id: 1,
        title: "Vegetables Burger",
        description: 'Barbecue Italian cuisine pizza',
        image: Burger,
    },
    {
        id: 2,
        title: "Spacial Pizza",
        description: 'Barbecue Italian cuisine pizza',
        image: Pizza,
    },
    {
        id: 3,
        title: "Spacial French fries ",
        description: 'Barbecue Italian cuisine',
        image: FrenchFries,
    },
    {
        id: 4,
        title: "Cuisine Chicken",
        description: 'Japanese Cuisine Chicken',
        image: Chicken,
    },
];

const socialIcons = [
    {
        icon: IoLogoFacebook,
    },
    {
        icon: FaXTwitter,
    },
    {
        icon: FaInstagram,
    },
    {
        icon: FaLinkedin,
    }
];

const footerInfo = [
    {
        icon: FaRegClock,
        title: "Opening Hours",
        info: "Monday - Sunday",
        description: "11:00 AM - 10:00 PM"
    },
    {
        icon: MdOutlineWifiCalling3,
        title: "Let's Talk",
        info: "Phone: 1-800-222-4545",
        description: "Fax: 1-800-222-4545"
    },
    {
        icon: IoMailOutline,
        title: "Book a Table",
        info: "Email: info@niomax.com",
        description: "Support: sales@niomax.com"
    },
    {
        icon: IoLocationOutline,
        title: "Our Address",
        info: "123 Anywhere, Any City, NY 12345",
        description: "New York, USA"
    }
]

export { navItems, buttonNames, aboutItems, popularItemData, socialIcons, footerInfo };
