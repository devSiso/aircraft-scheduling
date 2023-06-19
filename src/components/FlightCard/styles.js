import { styled } from '@mui/system';

export const FlightCardHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(0,0,0,0.1);
  font-weight: 500;
`;

export const FlightCardContent = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Small = styled('small')`
  font-size: 9px;
  font-weight: 900;
  text-transform: uppercase;
`;