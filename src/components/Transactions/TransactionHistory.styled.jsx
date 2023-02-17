import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  width: 800px;
  border-collapse: collapse;
  box-shadow: ${props => `0px 5px 15px 0px ${props.theme.colors.boxShadow}`};
  border-radius: 8px;
  border: ${props => `2px solid ${props.theme.colors.borderTableColor}`};
  background-color: ${props => props.theme.colors.backgroundColorSecondary};
`;

export const Thead = styled.thead`
  font-size: 18px;
  background-color: ${props => props.theme.colors.backgroundColorThead};
  color: ${props => props.theme.colors.titleColorThead}; 
`;



export const CaptionTransaction = styled.th`
  text-transform: uppercase;
  border: ${props => `2px solid ${props.theme.colors.borderTableColor}`};
  font-size: 18px;
  padding: 10px 20px;
   
`;

export const Body = styled.tbody`
  text-align: center;
`;

export const Line = styled.tr`
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.backgroundColorGray};;
  }
`;

export const Cell = styled.td`
  padding: 10px;
  border: ${props => `2px solid ${props.theme.colors.borderTableColor}`};
`;