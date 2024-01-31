import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";

const TopNav = ({ isScrolled }) => {
  const navigate = useNavigate();
  const navlink = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
              alt="logo"
            />
          </div>
          <ul className="links">
            {navlink.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rightSide">
          <button onClick={()=>signOut(auth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  nav {
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0 1rem 0 5rem;
    align-items: center;
    transition: 0.3s ease-in;
    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 10rem;
        height: 2rem;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      background-color: red;
      border: none;
      cursor: pointer;
      border-radius: 50%;
      padding: 3px;
      svg {
        color: white;
        font-size: 2rem;
      }
    }
  }
`;

export default TopNav;
