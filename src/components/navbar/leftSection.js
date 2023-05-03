import React from "react";
import styled from "styled-components";
import DisenoPublicoLogoImg from "../../assets/logo/logoDp.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  margin: 0;
  color: #222;
  font-size: 25px;
  font-weight: bold;
  font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
`;

export function Left(props) {
  return (
    <LogoWrapper>
      {/* <LogoImg>
        <img src={DisenoPublicoLogoImg} alt="Greenland logo" />
      </LogoImg> */}
      <LogoText>Diseño Público.</LogoText>
    </LogoWrapper>
  );
}
