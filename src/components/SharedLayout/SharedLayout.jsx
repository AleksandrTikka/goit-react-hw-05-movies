import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SharedLayout = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          {/* <StyledLink to="/movies/:movieId">MovieDetails</StyledLink> */}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
