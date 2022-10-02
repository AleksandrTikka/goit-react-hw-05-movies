import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const BackButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  padding: ${p => p.theme.space[1]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  margin: ${p => p.theme.space[1]}px;
`;
