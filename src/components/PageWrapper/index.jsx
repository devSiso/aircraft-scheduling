import React from "react";
import Container from '@mui/material/Container';

const PageWrapper = ({ children }) => {
  return (
    <Container maxWidth="lg" style={{ padding: '40px 20px'}}>
      {children}
    </Container>
  );
}
export default PageWrapper;
