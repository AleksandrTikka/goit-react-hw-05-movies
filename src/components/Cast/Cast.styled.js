import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  //   justify-content: center;
  align-items: center;
  row-gap: ${p => p.theme.space[4]}px;
`;
export const ListItem = styled.li`
  padding-bottom: ${p => p.theme.space[5]}px;
  flex-basis: calc((100% - 4 * ${p => p.theme.space[4]}px) / 5);
`;
export const Img = styled.img`
  object-fit: cover;
  display: block;
`;
