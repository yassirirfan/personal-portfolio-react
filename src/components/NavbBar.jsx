import React, { useState, useEffect } from "react";

import {
  PaddingContainer,
  FlexContainer,
  Container,
  BlueText,
} from "../styles/Global.styled";

import { GiHamburgerMenu } from "react-icons/gi";
import { NavbBarContainer, Logo, MenuIcon } from "../styles/NavBar.styled";
import { NavMenu } from "./layouts/NavMenu";
import { theme } from "../utils/Theme";

function NavbBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavbBarContainer bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex>
            {/* --left-logo-- */}
            <Logo>
              JustA<BlueText>Dev</BlueText>
            </Logo>
            {/* --right-logo-- */}
            <MenuIcon
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
      </PaddingContainer>
    </NavbBarContainer>
  );
}

export default NavbBar;
