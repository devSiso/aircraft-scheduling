import { styled } from '@mui/system';

export const DateHeadingWrapper = styled('ul')`
  list-style: none;
  padding: 0;
  max-width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #4f4f4f;

  li {
    display: flex;
    align-items: center;

    span {
      margin: 0 20px;
    }
  }
`;