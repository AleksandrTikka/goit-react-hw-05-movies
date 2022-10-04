import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  gap: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  width: 50%;
  /* height: 30px; */
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  outline: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgButton};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  transition: ${p => p.theme.transition.transform};
  transition: ${p => p.theme.transition.bgColor};
  :hover,
  :focus {
    transform: scale(1.2);
    background-color: ${p => p.theme.colors.bgButtonHover};
  }
`;
