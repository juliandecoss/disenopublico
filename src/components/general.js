import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Element, scroller } from "react-scroll";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Marginer } from "./marginer/index";
import { DeviceSize } from "./devices";

const TopContainer = styled.div`
  padding: 0;
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Letters = styled.p`
  font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
  font-size: ${(props) => (props.isMobile ? "1.5rem" : "3rem")};
  width: ${(props) => (props.isMobile ? "15rem" : "50rem")};
`;
const BlackLetters = {
  margin: 0,
  color: "#fff",
  "background-color": "#000000",
};
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
`;
const Text = styled.p`
  font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
  font-size: ${(props) => (props.isMobile ? "1.5rem" : "1.3rem")};
  width: ${(props) => (props.isMobile ? "15rem" : "45rem")};
`;
export default function General() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };
  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin={isMobile ? "3em" : "6em"} />
          <Letters isMobile={isMobile}>
            Somos <b style={BlackLetters}>Diseño Publico.</b> <br></br>
            Desarrollamos estudios de interés público, investigación y
            consultoría para proyectos diversos en las ciudades.
          </Letters>
          <ButtonContainer>
            <Button onClick={scrollToNextSection}>Botón</Button>
            <Text isMobile={isMobile}>_Somos un grupo que reúne equipos transdisciplinarios para crear proyectos que generen un impacto positivo. </Text>
          </ButtonContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
