import React from 'react';
import { FaGithub } from 'react-icons/fa';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    IconContainer,
  } from  '../styles/Global.styled';

  import { TechStackCard } from '../../styles/MyProjects.styled';
 
const Project = () => {
  return (
    <FlexContainer fullWidthChild>
        <div>
            <FlexContainer align="center" gap="1rem">
                <Heading>
                    Project Name
                </Heading>
                <IconContainer color="blue">
                    <FaGithub />
                </IconContainer>
            </FlexContainer> 
            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    <TechStackCard></TechStackCard>
                </FlexContainer>
            </PaddingContainer>
        </div>
        <div>

        </div>
    </FlexContainer>
  )
}

export default Project