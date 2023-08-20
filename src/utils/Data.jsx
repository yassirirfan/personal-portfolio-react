import { FaReact, FaNode, FaCss3Alt, FaAws, FaPython, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMongoose, SiMysql,SiPostgresql, SiLinux } from 'react-icons/si';
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
    {
        id: 6,
        tech: 'Mongoose',
        icons: <SiMongoose />
    },
    {
        id: 7,
        tech: 'Linux',
        icons: <SiLinux />
    },
    {
        id: 8,
        tech: 'Mysql',
        icons: <SiMysql />
    },
    {
        id: 9,
        tech: 'Postgresql',
        icons: <SiPostgresql />
    },
    {
        id: 10,
        tech: 'FaAws',
        icons: <FaAws />
    },
    {
        id: 11,
        tech: 'GitHub',
        icons: <FaGithub />
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
        reverse: false
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