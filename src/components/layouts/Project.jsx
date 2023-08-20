import React from 'react';
import { FaGithub } from 'react-icons/fa';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    IconContainer,
    Buttton,
  } from  '../../styles/Global.styled';

  import { 
    TechStackCard,
    ProjectImageContainer,
    ProjectImage
 } from '../../styles/MyProjects.styled';
 
export const Project = ({data}) => {
  return (
    <FlexContainer fullWidthChild>
        <div>
            <FlexContainer align="center" gap="1rem">
                <Heading>
                    {data.name}
                </Heading>
                <IconContainer color="blue">
                    <FaGithub />
                </IconContainer>
            </FlexContainer> 
            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    {data.tech_stack.map((tech) => (
                        <TechStackCard>{tech}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>
            <ParaText top="1.5rem" bottom="2rem">
                {data.desc}
            </ParaText>
            <Buttton>Visit Website</Buttton>
        </div>
        {/* ---right--section-- */}
        <div>
            <ProjectImageContainer justify="flex-end">
                <ProjectImage src={data.image} alt='ProjectImage'/>
            </ProjectImageContainer>
        </div>
    </FlexContainer>
  )
}