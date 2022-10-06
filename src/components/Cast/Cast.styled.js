import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;
export const ListItem = styled.li`
  padding-bottom: ${p => p.theme.space[5]}px;
  flex-basis: calc((100% - ${p => p.theme.space[4]}px*2) / 3);
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - ${p => p.theme.space[4]}px*3) / 4);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - ${p => p.theme.space[4]}px*4) / 5);
  }
`;
export const Wrapper = styled.div`
  height: 60px;
  @media screen and (min-width: 768px) {
    height: 50px;
  }
  @media screen and (min-width: 1280px) {
    height: 45px;
  }
`;
export const Img = styled.img`
  object-fit: cover;
  display: block;
  height: 200px;
  width: 100%;

  @media screen and (min-width: 320px) {
    height: 250px;
  }
  @media screen and (min-width: 768px) {
    height: 350px;
  }
  @media screen and (min-width: 1280px) {
    height: 500px;
  }
`;
