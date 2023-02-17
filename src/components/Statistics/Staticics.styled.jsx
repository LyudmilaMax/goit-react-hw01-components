import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216).toString(16)}`;
}

export const SectionStatistics = styled.section`
  width: 400px;
  text-align: center;
  background-color: ${props => props.theme.colors.backgroundColorSecondary};
  box-shadow: ${ props => `5px 5px 10px ${props.theme.colors.boxShadow}`};
  
    &:hover,
    &:focus {
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
                  1px 4px 6px rgba(0, 0, 0, 0.16)
    };
`;

export const Title = styled.h2`
  padding: 25px;
  font-size: 36px;
  color: ${props => props.theme.colors.titleColor};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
`;


export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${props => props.theme.spacing(2)};
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Parcentage = styled.span`
  font-size: 25px;
  font-weight: 600;
`;