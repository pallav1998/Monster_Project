import styled from "styled-components";

export const MainBox = styled.div`
  padding: 0px;
  margin: 0px;
  button {
    border-radius: 5px;
  }
`;

export const NavBar = styled.div`
  height: 70px;
  width: 100vw;
  /* border-bottom: 1px solid cyan; */
  display: flex;
  box-shadow: 0 1px 8px 0 gray;
  margin-bottom: 20px;

  img {
    height: 70px;
    margin-left: 190px;
    width: 12%;
    margin-right: 56vw;
  }
  button {
    border: 1px solid #3c3c3c;
    background-color: white;
    box-shadow: unset;
    color: #3c3c3c;
    text-align: center;
    width: 170px;
    height: 40px;
    margin-top: 15px;
    font-size: small;
  }
  button:hover {
    background-color: green;
    color: white;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  width: 70vw;
  margin: auto;
  /* border: 2px solid black; */
  height: 70vh;
  margin-top: 5vh;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 140px;
`;

export const LeftSide = styled.div`
  width: 30vw;
  overflow: hidden;
  padding: 10px 0 0 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 10vw;
  margin-left: 10vw;

  h3 {
    color: blue;
  }
  /* animation: div:nth-child(1) 5s linear infinite; */

  div:nth-child(1) {
    /* border: 2px solid blue; */
    /* transform: translateX(0px);
    visibility: visible;
    flex-basis: 300px;
    transition: transform 1s ease 0s; */
    animation: slide1 5s linear infinite;
    position: absolute;

    @keyframes slide1 {
      0% {
        visibility: visible;
      }
      33% {
        visibility: hidden;
      }
      66% {
        visibility: hidden;
      }
      100% {
        visibility: hidden;
      }
    }
  }
  div:nth-child(2) {
    /* border: 2px solid blue; */
    /* transform: translateX(-290px);
    visibility: visible;
    flex-basis: 300px;
    transition: transform 1s ease 0s; */
    animation: slide2 5s linear infinite;
    position: absolute;

    @keyframes slide2 {
      0% {
        visibility: hidden;
      }
      33% {
        visibility: hidden;
      }
      66% {
        visibility: visible;
      }
      100% {
        visibility: hidden;
      }
    }
  }
`;
export const RightSide = styled.form`
  /* border: 2px solid blue; */
  padding: 20px;
  width: 30vw;
  height: 36vw;
  margin-left: 5vw;
  font-family: poppins;
  font-weight: 400;
  box-shadow: 2px 2px 20px 0 gray;
  min-width: 300px;

  div:nth-child(1) {
    /* border: 2px solid blue; */
    text-align: left;
    margin-bottom: 20px;

    h1 {
      font-size: x-large;
    }

    p {
      color: #9b9b9b;
    }
  }
  div:nth-child(1) h1,
  div:nth-child(1) p,
  div:nth-child(1) h3,
  div:nth-child(2) p,
  div:nth-child(2) h5 {
    margin: 0;
  }

  div:nth-child(2) {
    /* border: 2px solid blue; */

    div {
      /* border: 2px solid green; */
      display: flex;
      flex-direction: row;

      svg {
        position: absolute;
        width: 18px;
        height: 18px;
        margin: 15px 10px;
      }

      input {
        width: 100%;
        height: 45px;
        margin-bottom: 20px;
        padding-left: 40px;
      }
    }

    input[type="submit"] {
      width: 100%;
      height: 45px;
      margin-bottom: 20px;
      background: #6c54da;
      border: 1px solid #6c54da;
      color: white;
      font-size: medium;
      border-radius: 5px;
    }
    input[type="submit"]:hover {
      background: #2d159b;
      border: 1px solid #2d159b;
      cursor: pointer;
    }
    h5 {
      color: blue;
    }
  }

  div:nth-child(3) {
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: row;

    p {
      margin-right: 100px;
      color: #9b9b9b;
    }

    svg {
      width: 25px;
      height: 25px;
      margin: 14px 5px;
    }
  }
  button {
    background-color: white;
    border: 2px solid #2d159b;
    width: 100%;
    height: 45px;
    margin-top: 10px;
    color: #2d159b;
    font-size: medium;
  }
  button:hover {
    background-color: #2d159b;
    color: white;
    cursor: pointer;
  }
`;
