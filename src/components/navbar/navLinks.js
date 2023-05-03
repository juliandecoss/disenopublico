import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 800;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2.5px solid black;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">¿Qué hacemos?</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Proyectos</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Nosotros</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Servicios</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Contacto</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
