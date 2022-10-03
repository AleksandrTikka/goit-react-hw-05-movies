import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  padding: ${p => p.theme.space[1]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  margin: ${p => p.theme.space[1]}px;
  margin-left: ${p => p.theme.space[4]}px;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const SecondaryInfo = styled.div`
  border-bottom: ${p => p.theme.borders.bold} black;
  padding: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[6]}px;
`;

export const Heading = styled.h3`
  padding-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const InfoLink = styled(NavLink)`
text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
      color: ${p => p.theme.colors.active};
    }
  :hover:not(.active),
    :focus:not(.active) {
    color: ${p => p.theme.colors.accent};`;
