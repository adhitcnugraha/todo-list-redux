import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>Todo List Lv. 2</div>
      <div>React-Redux</div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  border-radius: 25px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 35px;
`;
