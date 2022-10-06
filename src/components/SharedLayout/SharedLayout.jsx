import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation, StyledLink } from './SharedLayout.styled';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
