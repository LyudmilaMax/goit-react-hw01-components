import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${ props => `5px 5px 10px ${props.theme.colors.boxShadow}`};
  
    &:hover,
    &:focus {
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
                  1px 4px 6px rgba(0, 0, 0, 0.16)
    };
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.backgroundColorSecondary};
`;

export const PhotoUser = styled.img`
  width: 160px;
  height: 160px;
`;

export const NameUser = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const TagUser = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`;

export const LocationUser = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.spacing(2)};
  border: ${props => `1px solid ${props.theme.colors.borderColor}`};
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`;

export const QuantityStats = styled.span`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
