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


const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
    >
      <FlexContainer fullWidthChild>
        {/* ---left-container-- */}
        <SkillCardContainer>
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
        <div>
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
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </ParaText>
              <ParaText>
                There are many variations of passages of Lorem Ipsum available, but the 
                majority have suffered alteration in some form, by injected humour, or 
                randomised words which don't look even slightly believable. If you are 
                going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators 
                on the Internet tend to repeat predefined chunks as necessary, making this the 
                first true generator on the Internet. It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, to generate Lorem Ipsum 
                which looks reasonable. The generated Lorem Ipsum is therefore always free from 
                repetition, injected humour, or non-characteristic words etc.
              </ParaText>
        </div>
      </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills