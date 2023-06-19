import { styled } from '@mui/system';

export const EmptyBox = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`