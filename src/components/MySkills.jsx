/* eslint-disable array-callback-return */
import React from 'react';

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from  '../styles/Global.styled';

import {
  SkillCardContainer, 
  SkillCard
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';
import { motion } from 'framer-motion';
import { 
  fadeInLeftVariant, 
  fadeInRightVariant 
} from "../utils/Variants";


const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer 
        responsiveFlex  
        responsiveDirection="column-reverse" 
        fullWidthChild
      >
        {/* ---left-container-- */}
        <SkillCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill) => (
              <SkillCard key={skill.id}>
                <IconContainer size="5rem" color="blue">
                    {skill.icons}
                </IconContainer>
                <Heading as="h4" size="h4">
                  {skill.tech}
                </Heading>
              </SkillCard>
          ))}
        </SkillCardContainer>
        {/* --right-section-- */}
        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
              <Heading as="h4" size="h4">
                  MY SKILLS
              </Heading>
              <Heading as="h2" size="h2">
                  What <BlueText>I can do</BlueText>
              </Heading>
              <ParaText top="2rem" bottom="1.5rem">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
              </ParaText>
              <ParaText>
                There are many variations of passages of Lorem Ipsum available, but the 
                majority have suffered alteration in some form, by injected humour, or 
                randomised words which don't look even slightly believable. If you are 
                going to use a passage of Lorem Ipsum.
              </ParaText>
        </motion.div>
      </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills