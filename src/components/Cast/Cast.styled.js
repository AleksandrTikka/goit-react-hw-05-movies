import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;
export const ListItem = styled.li`
  padding-bottom: ${p => p.theme.space[5]}px;
  flex-basis: calc((100% - ${p => p.theme.space[6]}px) / 5);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const Img = styled.img`
  max-height: 250px;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
