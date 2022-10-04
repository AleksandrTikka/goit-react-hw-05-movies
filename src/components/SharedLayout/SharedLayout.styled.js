import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  box-shadow: ${p => p.theme.shadows.header};
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  //   padding: ${p => p.theme.space[4]}px 0;
  transition: ${p => p.theme.transition.color};

  &.active {
    color: ${p => p.theme.colors.active};
    border-bottom: ${p => p.theme.borders.bold};
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
