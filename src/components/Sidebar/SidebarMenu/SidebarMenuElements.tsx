import styled from 'styled-components';

export const ClosingButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const ClosingButton = styled.span`
  cursor: pointer;
`;

export const CommonContainer = styled.div`
  padding: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem;
`;
export const StyledInput = styled.input`
  border: 1px solid #e7e7eb;
  background: none;
  padding: 0.5rem;
  color: white;
  width: 100%;
  margin-right: 1rem;
  font-family: 'Raleway', sans-serif;
`;

export const StyledButton = styled.button`
  background: #3c47e9;
  border: none;
  color: #e7e7eb;
  padding: 0.75rem;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
`;

export const CommonLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommonLocation = styled.div`
  padding: 1rem;
  margin-block: 2rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #616475;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #eae7e7;
    color: black;
    background: #eae7e7;
  }
`;

export const CommonLocationTitle = styled.p``;

export const CommonLocationArrow = styled.p`
  color: #616475;
`;

export const CommonLocations = styled.h3``;
