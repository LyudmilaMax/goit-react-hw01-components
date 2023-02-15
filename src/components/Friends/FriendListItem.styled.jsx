import styled from '@emotion/styled';

export const ItemFriend = styled.li`
  display: flex;
  gap: 20px;
  padding: 15px;
  align-items: center;
  background-color: white;
  box-shadow: 5px 5px 10px #706a6a;
    &:hover,
    &:focus {
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
                  1px 4px 6px rgba(0, 0, 0, 0.16)
    };
`;

export const StatusFriend = styled.span`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 100%;
`;

export const ImgFriend = styled.img`
  width: 80px;
  padding: 4px;
  background-color: rgb(224, 220, 220);
  border-radius: 4px;
`;

export const NameFriend = styled.p`
  font-size: 30px;
  color: #413939;
`;