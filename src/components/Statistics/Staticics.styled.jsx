import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  
  width: 400px;
  text-align: center;
  background-color: white;
  box-shadow: 5px 5px 10px #706a6a;
  
    &:hover,
    &:focus {
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
                  1px 4px 6px rgba(0, 0, 0, 0.16)
    };
`;

export const Title = styled.h2`
  padding: 25px;
  font-size: 36px;
  color: #413939;
  
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
//   color: white;
  color: rgb(128, 128, 128);
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  width: 100%;
  padding: 10px;
//   border: 1px solid rgb(133, 128, 128);
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Parcentage = styled.span`
  font-size: 25px;
  font-weight: 600;
`;