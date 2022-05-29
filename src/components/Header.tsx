import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Container} from "../App";
import {TailSpin} from "react-loader-spinner";
import {useAppSelector} from "../hooks/redux";

const AppHeader = styled.header`
  z-index: 2;
  background-color: #2196F3;
  height: 64px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`

const NavBarList = styled.ul`
  height: 100%;
  margin-left: 0;
  padding-left: 0;
  display: flex;

  li {
    list-style-type: none;
  }
`

const NavBarListItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

const NavBar = styled.nav`
  height: 100%;
`

const NavBarListItemLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 20px;
  opacity: 0.7;

  &.active {
    background-color: #1E88E5;
    opacity: 1;
  }
`


const Header: FC = () => {
    const {loading} = useAppSelector(state => state.cats)
    return (
        <AppHeader>
            <Container>
                <NavBar>
                    <NavBarList>
                        <NavBarListItem>
                            <NavBarListItemLink to={'/'}>Все котики</NavBarListItemLink>
                        </NavBarListItem>
                        <NavBarListItem>
                            <NavBarListItemLink to={'/favorites'}>Любимые котики</NavBarListItemLink>
                        </NavBarListItem>
                        <NavBarListItem>
                            {loading && <TailSpin color="#fff" height={30} width={30}/>}
                        </NavBarListItem>
                    </NavBarList>
                </NavBar>
            </Container>
        </AppHeader>
    );
};

export default Header;