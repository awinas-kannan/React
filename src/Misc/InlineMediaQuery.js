import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const InlineMediaQuery = () => {
    const StyledDiv = styled.div`
    background: red;
    width: 100%;
    height: 200px;

    @media (max-width: 768px) {
      background: blue;
    }
  `;

    return (
        <Container>
          <Heading>Welcome to My App</Heading>
          <Button>Click Me</Button>
          <StyledDiv>This is my component</StyledDiv>
        </Container>
      );
};

export default InlineMediaQuery;