import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      {" "}
      {/*navigation - sc*/}
      <Logo src="/icons/images/logo.svg" /> {/*logo - sc*/}
      <NavMenu>
        {" "}
        {/* navigation menu - sc*/}
        <a>
          <img src="/icons/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/icons/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/icons/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/icons/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/icons/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/icons/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/user_arnold.jpg" class="center" />
    </Nav>
  );
}

export default Header;

//navigation header
const Nav = styled.nav`
  height: 80px;
  background: #090b13;
  display: flex;
  padding: 0 16px;
  align-items: center;
`;
//Logo header
const Logo = styled.img`
  width: 80px;
  height: 80px;
  padding: 0 16px;
`;
//Navigation Menu
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  cursor: pointer;
  align-items: center;
  padding: 0 16px;
  a {
    display: flex;
    align-items: center;
    padding: 0 16px;

    img {
      height: 25px;
    }
    span {
      padding: 0 8px;
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
        box-shadow: inset 0 0 0 0 #d80286;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
      box-shadow: inset 0 100px 0 0 #d80286;
    }
  }
`;
//User Image
const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
