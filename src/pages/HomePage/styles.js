import { styled } from '@mui/system';

export const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FlightsList = styled(List)`
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: hidden;
  max-height: 400px;
  overflow-y: auto;
  padding-bottom: 20px;
  margin-top: 8px;
  background-color: #fff;

  .flights-list__searchbar-wrapper {
    position: sticky;
    top: 0;
    background-color: #fff;
    right: 0;
    left: 0;
    padding: 20px;
    z-index: 1;
  }
  
  li {
    margin-top: 20px;
    padding: 0 8px;
  }

  li[data-hidden=true] {
    display: none;
  }
`;

export const RotationList = styled(List)`
  padding: 20px;
  border: 1px solid blue;
`;

export const GridHeader = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`