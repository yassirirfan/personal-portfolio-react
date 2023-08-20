import React from "react";
import { motion } from "framer-motion";
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from "../styles/Global.styled";

import {
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle,
} from "../styles/Showcase.styled";

import { 
    BsLinkedin, 
    BsFacebook, 
    BsInstagram 
} from "react-icons/bs";

import ShowcaseImage from "../assets/showcase-img.png";
import BackroundImage from "../assets/particle.png";
import { 
    fadeInLeftVariant, 
    fadeInRightVariant 
} from "../utils/Variants";

const Showcase = () => {
    return (
    <PaddingContainer 
        id="Home" 
        left="3%" 
        right="10%" 
        top="15%" 
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="8rem"
    >
        <FlexContainer align="center" text_align="left" fullWidthChild>
        {/* ---left-content--- */}
        <motion.div
            variants={fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
        >
            <Heading as="h4" size="h4">
            {" "} Hello {" "}
            </Heading>
            <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            I'm <BlueText>Yassir Irfan</BlueText>
            </Heading>
            <Heading as="h3" size="h3">
            I'm a <BlueText>Odoo Developer</BlueText>
            </Heading>
            <ParaText as="p" top="2rem" bottom="4rem">
                Hello, My Name is Yassir Irfan and I am Odoo developer with 2 Years
                of experience in v14, v15 and 16 of Odoo
            </ParaText>
            {/* ---social-icons--- */}
            <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
                <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
                <BsFacebook />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
                <BsInstagram />
            </IconContainer>
            </FlexContainer>
        </motion.div>

        {/* ---right-content--- */}
        <FlexContainer 
            as={motion.div} 
            variants={fadeInRightVariant} 
            initial="hidden"
            whileInView="visible"
            justify="flex-end"
        >
            <ShowcaseParticleContainer>
            <ShowcaseImageCard>
                <img src={ShowcaseImage} alt="showcase" />
            </ShowcaseImageCard>
            <Particle
                as={motion.img}
                animate={{
                    x: [0, -100, 0],
                    rotate: 360,
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity
                }}
                src={BackroundImage}
                alt="background"
                top="-80px"
                left="20px"
                rotate="60deg"
            />
            <Particle
                as={motion.img}
                animate={{
                    y: [0, -100, 0],
                    rotate: 360,
                    scale: [1, 0.8, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity
                }}
                src={BackroundImage}
                alt="background"
                top="50px"
                right="-70px"
                rotate="0deg"
            />
            <Particle
                as={motion.img}
                animate={{
                    y: [0, -100, 0],
                    rotate: 360,
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                }}
                src={BackroundImage}
                alt="background"
                bottom="10px"
                left="-70px"
                rotate="50deg"
            />
            </ShowcaseParticleContainer>
        </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
    );
};

export default Showcase;
