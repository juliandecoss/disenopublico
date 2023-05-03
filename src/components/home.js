import React from "react";
import styled, { css } from "styled-components";
import Portada from "../assets/logo/portada1.png";
import LogoLinkedIn from "../assets/logo/logotipo-de-linkedin.png"
import LogoMas from "../assets/logo/mas.png"
import { Link } from "react-router-dom";


const CoverPage = styled.img`
  width: 92%;
  margin-left: 4%;
  height: 50%;
  object-fit: cover;
  object-position: 50% 50%;
`;
const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
`;
const Letters = styled.p`
  margin-left: 4%;
  margin-top: 30px;
  font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
  font-size: 13px;
`;
const LettersInfo = styled.p`
  margin-left: auto;
  margin-right: auto;
  right: 0;
  margin-top: 55px;
  font-family: helvetica-w01-light, helvetica-w02-light, sans-serif;
  font-size: 13px;
`;
const Lkin = styled.img`
   margin-top: 48px;
   margin-right: 7%;
   width: 2%;
   height: 2%;
`;
const Mas = styled.img`
   position: absolute;
   width: 3%;
   height: 6%;
   left: 54%;
   bottom: 30%;
`;
const LinkCss ={
    'position':'absolute',
    'text-decoration': 'none',
    'font-family': 'helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif',
    'font-size': '50px',
    color:'#000000',
    left: '33%',
    bottom: '27%',
    top: '66%',
    'background-color': '#FFFFFF',
    'font-weight':'bold'
}
const MasStyle = {
    position:'absolute',
    left:'56%',
    bottom:'33%',
    border: '1px dotted #73806A',
    width: '3px',
    height: '3px',
    'background-color': 'white',
    'box-sizing': 'border-box',
    transform: 'scale(20)',
  }
export default function Home(props) {
  const { inline, small } = props;
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <CoverPage src={Portada} inline={inline} small={small} />
        <Link to="/que-hacemos" style={LinkCss}>Conócenos. </Link>
      </div>
      {/* <Link to="/que-hacemos"><div className="plus" style={MasStyle}></div></Link> */}
      <NavbarContainer>
        <Letters>
          Guerrero, Chiapas México.
          <br></br>
          <br></br>
          info@disenopublico.com
        </Letters>
        <LettersInfo>
          Diseño de Interés Público . Investigación Urbana . Consultoría
          Estratégica
        </LettersInfo>
        <Lkin src={LogoLinkedIn}/>
      </NavbarContainer>
    </>
  );
}
