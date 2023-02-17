import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 40px;
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.backgroundColorContainer};
`;