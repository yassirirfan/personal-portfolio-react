import React, { useState } from 'react'

import {
  PaddingContainer,
  FlexContainer,
  Container,
  BlueText
} from  '../styles/Global.styled';

import{ GiHamburgerMenu } from 'react-icons/gi';
import { NavbBarContainer, Logo, MenuIcon } from '../styles/NavBar.styled';
import { NavMenu } from './layouts/NavMenu'

function NavbBar() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <NavbBarContainer bgColor="transparent">
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
      >
        <Container>
          <FlexContainer justify="space-between">
            {/* --left-logo-- */}
            <Logo>
                JustA<BlueText>Dev</BlueText>
            </Logo>
            {/* --right-logo-- */}
            <MenuIcon
              onClick={() => { setOpenMenu(true) }}
            >
                <GiHamburgerMenu />
            </MenuIcon>

          </FlexContainer>
        </Container>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
      </PaddingContainer>
    </NavbBarContainer>
  )
}

export default NavbBar