import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
  } from  '../../styles/Global.styled';


import {AiOutlineClose} from 'react-icons/ai';

import { MenuIcon, NavMenuContainer, MenuItem } from '../../styles/NavBar.styled';
import { NavLinks } from '../../utils/Data';

export const NavMenu = ({setOpenMenu}) => {
  return (
    <NavMenuContainer>
        <PaddingContainer
            left="5%" right="5%" top="2rem"
        >
            <FlexContainer justify="flex-end">
                <MenuIcon onClick = {() => setOpenMenu(false)}>
                    <AiOutlineClose />
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>
        {/* ---menu-items-- */}
        <PaddingContainer top="8%">
            <FlexContainer
              direction="column"
              align="center"
            >
              {NavLinks.map((link) =>
                  <MenuItem key={link.id} href={`#${link.href}`} onClick={() => setOpenMenu(false)}>{link.name}</MenuItem>
              )}
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}