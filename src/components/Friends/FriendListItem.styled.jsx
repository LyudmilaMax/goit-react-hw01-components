import styled from '@emotion/styled';


export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.backgroundColorSecondary};
  box-shadow: ${ props => `5px 5px 10px ${props.theme.colors.boxShadow}`};
    
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
                1px 4px 6px rgba(0, 0, 0, 0.16)
    };
`;

export const StatusFriend = styled.span`
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const ImgFriend = styled.img`
  width: 80px;
  padding: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.backgroundColorGray};
  border-radius: 4px;
`;

export const NameFriend = styled.p`
  font-size: 30px;
  color: ${props => props.theme.colors.textPrimary};
`;