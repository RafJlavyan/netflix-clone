import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
          alt="logo"
        />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem 4rem;
  .logo {
    img {
      height: 3rem;
      cursor: pointer;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
  }
`;

export default Header;
