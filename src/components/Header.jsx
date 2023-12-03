import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  height: 80px;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 25px;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavBarLink = styled(NavLink)`
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  padding: 10px 0;
  text-decoration: none;
  text-align: center;
  width: 60px;
`;

function Header() {
  return (
    <header>
      <HeaderContainer className="container">
        <Logo>Filmes e Séries</Logo>
        <NavBar>
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="/new">Novo</NavBarLink>
        </NavBar>
      </HeaderContainer>
    </header>
  );
}

export default Header;
