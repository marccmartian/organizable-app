import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 240px;
  height: calc(100vh - 40px);
  color: var(--textColor);
`;

const NavbarList = styled.ul`
  padding-top: 2rem;
`;

const NavbarItem = styled.li`
  padding: 6px 32px;
  margin-bottom: 1rem;
  border-radius: 4px;
  list-style: none;
  cursor: pointer;

  :hover {
    background-color: #e4f0f6;
    color: var(--ligthBlue);
  }
`;

const NavbarLink = styled.a``;

export { NavbarContainer, NavbarList, NavbarItem, NavbarLink };
