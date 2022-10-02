import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'components/Loader';

const SharedLayout = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: ${p => p.theme.colors.active};
    }

    :hover:not(.active),
    :focus:not(.active) {
      color: ${p => p.theme.colors.accent};
      border-bottom: ${p => p.theme.borders.bold};
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
