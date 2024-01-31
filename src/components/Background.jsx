import React from "react";
import styled from "styled-components";

const Background = () => {
  return (
    <BackgroundContainer>
      <img
        src="https://www.pcworld.com/wp-content/uploads/2024/01/Netflix-Hintergrund.jpg?quality=50&strip=all"
        alt="background image"
      />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default Background;
