import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const Player = () => {
  const navigate = useNavigate();

  return (
    <PlayContainer>
      <div className="player">
        <div className="backArrow">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <ReactPlayer
          url="https://www.youtube-nocookie.com/embed/T6DJcgm3wNY?si=ljB0AQnEFuwZoDQl?autoplay=1"
          playing={true}
          width="100%"
          height="100%"
          title="YouTube video player"
        ></ReactPlayer>
      </div>
    </PlayContainer>
  );
};

const PlayContainer = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .backArrow {
      position: absolute;
      top: 2%;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
        color: white;
      }
    }
  }
`;

export default Player;
