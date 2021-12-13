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

{
  /* <>
      <Nav className='navbar navbar-expand-lg navbar-dark bg-dark container-fluid'>
        <>
          <NavLink to={user ? "/home" : "/login"}>
            <img src={btc} alt="logo" className="cripto" />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/mercado" activeStyle>
              Market
            </NavLink>
            {user ? (
              <>
                <NavLink to="/home" activeStyle>
                  Home
                </NavLink>

                <NavLink to="/movimientos" activeStyle>
                  Movements
                </NavLink>
                <NavLink to="/user" activeStyle>
                  User
                </NavLink>
                <button className="btn_logout" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" activeStyle>
                  Sign Up
                </NavLink>
                <NavBtn>
                  <NavBtnLink to="/registro">Sign In</NavBtnLink>
                </NavBtn>
              </>
            )}
          </NavMenu>
        </>
      </Nav>
    </> */
}
{
  /* <Container>
      <Wrapper>
        <img src={btc} alt="logo" className="cripto" />
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FaBars style={{fontSize:'2em', display:'flex', justifyContent:'center', alignItems:'center'}}/>
        </MobileIcon>
        <Menu open = {showMobileMenu}>
          <MenuItem>
            <MenuItemLink to="mercado"> Market</MenuItemLink>
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
              <button className="btn_logout" onClick={logout}>
                Logout
              </button>
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
      </Wrapper>
    </Container> */
}
