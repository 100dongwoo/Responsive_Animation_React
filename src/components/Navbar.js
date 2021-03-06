import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
// import { FaBars } from 'react-icons/fa';
import Bars from '../images/bars.svg';
const Nav = styled.nav`
    height: 60px;

    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    //    밑줄
`;
const Logo = styled(Link)`
    ${NavLink};
    font-style: italic;
`;
const MenuBars = styled.i`
    display: none;
    @media screen and (max-width: 768px) {
        background-image: url(${Bars});
        background-size: contain;
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        top: 0;
        right: 0;
        position: absolute;
        transform: translate(-50%, 25%);
    }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -3rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
`;
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
function Navbar({ toggle }) {
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((items, index) => (
                    <NavMenuLinks to={items.link} key={index}>
                        {items.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    );
}

export default Navbar;
