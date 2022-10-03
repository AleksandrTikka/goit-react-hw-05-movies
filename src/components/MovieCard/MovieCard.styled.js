import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.bold} black;
`;

export const Img = styled.img`
  height: 300px;
`;

export const MovieTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const Heading = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  padding-bottom: ${p => p.theme.space[3]}px;
`;
