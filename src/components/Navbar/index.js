import React from "react";
import {
  NavbarContainer,
  NavbarItem,
  NavbarLink,
  NavbarList,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink>My boards</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink>Closed boards</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink>My profile</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink>Log out</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
