import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.netflix);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <HeroContainer>
      <div className="hero">
        <div className="overlay"></div>
        <TopNav isScrolled={isScrolled} />
        <img src="https://images2.alphacoders.com/589/589553.png" alt="" />
        <div className="container">
          <div className="title">
            <h1>Super man</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus assumenda iure vel nam nemo iusto quasi repellat maxime
              consectetur suscipit illum commodi, eius, aut officia, est labore
              quae totam dicta.
            </p>
          </div>
          <div className="buttons">
            <button className="playBtn" onClick={() => navigate("/player")}>
              Play
            </button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies}/>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  .hero {
    position: relative;
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000000b0;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-decoration: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;

        .playBtn,
        .moreBtn {
          display: flex;
          align-items: center;
          color: red;
          border-radius: 1rem;
          outline: none;
          border: none;
          font-size: 1.3rem;
          gap: 1rem;
          padding: 0.9rem;
          padding-right: 2.4rem;
          padding-left: 2.4rem;
          cursor: pointer;
        }
        .moreBtn {
          background-color: black;
          border: 0.1rem solid white;
        }
      }
    }
  }
`;

export default Netflix;
