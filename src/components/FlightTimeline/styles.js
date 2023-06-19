import { styled } from '@mui/system';

export const Times = styled('ul')`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  font-size: 10px;
  font-weight: bold;
  padding: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ChartBar = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 20px;
  border-radius: 5px;
`;

export const ChartValue = styled('div')`
  display: inline;
  height: 100%;
`

export const Legend = styled('ul')`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;

  li {
    margin-right: 16px;
  }
`

export const LegendItemWrapper = styled('li')`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  font-weight: bold;

  span {
    margin-right: 8px;
    width: 10px;
    height: 10px;
    border: 1px solid black;
    background-color: ${props => props.color};
  }
`;