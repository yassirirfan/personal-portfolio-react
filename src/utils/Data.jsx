import { 
    FaReact, 
    FaNode, 
    FaCss3Alt, 
    FaPython 
} from 'react-icons/fa';
import { 
    SiJavascript, 
    SiMongodb, 
} from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';


export const Skills = [
    {
        id: 0,
        tech: 'React Js',
        icons: <FaReact/>
    },
    {
        id: 1,
        tech: 'Node Js',
        icons: <FaNode/>
    },
    {
        id: 2,
        tech: 'CSS',
        icons: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'Javascript',
        icons: <SiJavascript />
    },
    {
        id: 4,
        tech: 'Python',
        icons: <FaPython />
    },
    {
        id: 5,
        tech: 'Mongodb',
        icons: <SiMongodb />
    },
]

export const projects = [
    {
        id: 0,
        name: "Odoo E-commerce Platform",
        desc: "A comprehensive e-commerce solution built using Odoo.",
        image: Project1,
        tech_stack: ["Python", "Odoo", "PostgreSQL", "HTML", "CSS", "JavaScript"],
        url: "https://github.com/odoo-ecommerce",
        reverse: false
    },
    {
        id: 1,
        name: "Odoo HR Management System",
        desc: "A comprehensive HR management system developed using Odoo.",
        image: Project2,
        tech_stack: ["Python", "Odoo", "PostgreSQL"],
        url: "https://github.com/odoo-hr-system",
        reverse: true
    }
    
]

export const NavLinks = [
    {
        id: 0, 
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1, 
        name: 'Skills',
        href: 'Skills'
    },
    {
        id: 2, 
        name: 'Projects',
        href: 'Projects'
    },
    {
        id: 3, 
        name: 'Contact',
        href: 'Contact'
    }
]