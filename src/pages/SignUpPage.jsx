import React, { useState } from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import styled from "styled-components";
import { auth } from "../utils/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) navigate("/");
  // });

  return (
    <Container>
      <Background />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>watch anywhere, Cancel Anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
              />
            ) : (
              <input
                type="email"
                placeholder="email address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            )}

            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button onClick={handleSignIn}>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 2rem;
      color: white;
      width: 60%;
    }
    h1 {
      margin: 20px;
    }
    h4 {
      margin: 20px;
    }
    h6 {
      margin: 20px;
    }
    .form {
      margin: 20px;
      display: grid;
      width: 60%;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
      input {
        color: black;
        padding: 1rem 1.5rem;
        font-size: 1.2rem;
        width: 45rem;
        outline: none;
      }
      button {
        padding: 0.5rem 1rem;
        background-color: red;
        color: white;
        border: none;
        cursor: pointer;
        width: 10rem;
      }
    }
  }
`;

export default SignUpPage;
