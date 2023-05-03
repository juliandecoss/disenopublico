import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Left } from "./leftSection";
// import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../devices";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;
const RightSection = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Left />
      </LeftSection>
      <MiddleSection>{}</MiddleSection>
      <RightSection>
        {/* {!isMobile && <Accessibility />} */}
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
