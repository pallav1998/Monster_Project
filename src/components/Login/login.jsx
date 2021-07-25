// import { SignUp } from "./signup";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { NavLink, Redirect } from "react-router-dom";
import { loginData } from "../Search/Data";

const MainBox = styled.div`
  padding: 0px;
  margin: 0px;
`;

const NavBar = styled.div`
  height: 70px;
  width: 100vw;
  border-bottom: 1px solid cyan;
  display: flex;

  img {
    margin-left: 190px;
    width: 8%;
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

const Box = styled.div`
  width: 70vw;
  margin: auto;
  /* border: 2px solid black; */
  height: 70vh;
  margin-top: 5vh;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.div`
  width: 40vw;
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
const RightSide = styled.form`
  /* border: 2px solid blue; */
  padding: 20px;
  width: 20vw;
  height: 68vh;
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

export function Login() {
  const [formData, setFormData] = useState({});
  const [time, setTime] = useState([]);

  let crousal = [
    {
      img: "https://www.monsterindia.com/rio/public/images/carousel_1.svg",
      h3: "Job Alert",
      p: "Get real time alerts for hot new jobs",
      id: 1,
    },
    // {
    //   img: "https://www.monsterindia.com/rio/public/images/carousel_2.svg",
    //   h3: "Find Better",
    //   p: "Find jobs that match your skills across top employers in thecountry",
    //   id: 2,
    // },
    // {
    //   img: "https://www.monsterindia.com/rio/public/images/carousel_3.svg",
    //   h3: "Apply Quickly",
    //   p: "Save time and effort with Monster Quick Apply",
    //   id: 3,
    // },
  ];

  const DataFetch = () => {
    // console.log(crousal);

    // setInterval(() => {
    setTime(crousal);
    // }, 2000);
  };

  useEffect(() => {
    DataFetch();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    console.log(type);

    setFormData({ ...formData, [name]: value });
  };

  const [isLoggedIn, setIsloggedIn] = useState(false);

  // localStorage.setItem("loggedin", JSON.stringify("0"));

  const submit = (e) => {
    e.preventDefault();
    console.log(loginData, formData);
    loginData.forEach((el) => {
      if (el.name === formData.name) {
        if (el.password === formData.password) {
          localStorage.setItem("loggedin", JSON.stringify("1"));
          console.log(isLoggedIn);
          setIsloggedIn(true);
        }
      }
    });
  };

  // let x = JSON.parse(localStorage.getItem("loggedIn"));

  // if(x) setIsloggedIn(true);

  return (
    <MainBox>
      {isLoggedIn && <Redirect to={"/"} />}
      <NavBar>
        <img
          src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
          alt="logo"
        />
        <div className="btn">
          <button>Login as Employer instead</button>
        </div>
      </NavBar>
      <Box>
        <LeftSide>
          {time.map((e) => (
            <div key={e.id}>
              <img src={e.img} alt="img1" />
              <h3>{e.h3}</h3>
              <p>{e.p}</p>
            </div>
          ))}
          {/* <div>
            <img
              src="https://www.monsterindia.com/rio/public/images/carousel_1.svg"
              alt="img1"
            />
            <h3>Job Alert</h3>
            <p>Get real time alerts for hot new jobs</p>
          </div>
          <div>
            <img
              src="https://www.monsterindia.com/rio/public/images/carousel_2.svg"
              alt="img1"
            />
            <h3>Find Better</h3>
            <p>
              Find jobs that match your skills across top employers in
              thecountry
            </p>
          </div> */}
          <div>
            <img
              src="https://www.monsterindia.com/rio/public/images/carousel_3.svg"
              alt="img1"
            />
            <h3>Apply Quickly</h3>
            <p>Save time and effort with Monster Quick Apply</p>
          </div>
        </LeftSide>
        <RightSide onSubmit={submit} action="../body/home">
          <div>
            <h3>Hello!</h3>
            <h1>Welcome Back</h1>
            <p>You are just a step away from your dream job.</p>
          </div>
          <div>
            {/* <br /> */}
            <div>
              <FaUserAlt />
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="E-mail/Mobile"
                required
              />
            </div>
            {/* <br /> */}
            <div>
              <FaLock />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <input type="submit" value="Login" />
            <p>or</p>
            <h5>Login vis OTP</h5>
            <hr />
          </div>
          <div>
            <p>Or login via socials</p>
            <SiFacebook />
            <FcGoogle />
          </div>
          <hr />
          <NavLink to={"/signup"}>
            <button>New to Monster? Sign Up</button>
          </NavLink>
        </RightSide>
      </Box>
    </MainBox>
  );
}
