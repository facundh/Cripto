import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./NavBarElements.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

import { AuthConsumer } from "../../Context/Auth/AuthProvider";
const Navbar = () => {
  const { user, logout } = AuthConsumer();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider
          value={{
            style: {
              fontSize: "1.5em",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            },
          }}
        >
         

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink to="mercado">Market</MenuItemLink>
            </MenuItem>
            {user ? (
              <>
                <MenuItem>
                  <MenuItemLink to="/home"> Home</MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink to="/movimientos"> Movements</MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink to="/user"> User </MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink to="/login" onClick={logout}>
                    Logout
                  </MenuItemLink>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <MenuItemLink to="/login"> Sign Up </MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink to="/registro"> Sign In </MenuItemLink>
                </MenuItem>
              </>
            )}
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
