import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SharedLayout = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }

    :hover:not(.active),
    :focus:not(.active) {
      color: yellow;
    }
  `;
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          {/* <StyledLink to="/movies/:movieId">MovieDetails</StyledLink> */}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
