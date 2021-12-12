import React, { useState } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";

import "bootswatch/dist/lux/bootstrap.min.css";
import btc from "../../assets/img/btc.png";
import { AuthConsumer } from "../../Context/Auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = AuthConsumer();

  const [show, setShow] = useState(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to={user ? "/home" : "/login"}>
        <img src={btc} alt="logo" className="cripto" />
      </NavLink>

        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

            <NavMenu className="collapse navbar-collapse" id="navbarNav">
            <NavLink to="/mercado" activeStyle={true} className='text-lg-end'>
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
          </div>
        
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <>
  <Nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
    <>
      <button
        className="navbar-toggler"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink to={user ? "/home" : "/login"}>
        <img src={btc} alt="logo" className="cripto" />
      </NavLink>

      {!show ? (
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
      )}
    </>
  </Nav>
</>; */
}
