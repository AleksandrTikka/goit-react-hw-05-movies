import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[6]}px;
`;

export const Item = styled.li`
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const Author = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
