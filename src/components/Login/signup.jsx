import { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { FaPhoneSquareAlt, FaEnvelope, FaTwitterSquare } from "react-icons/fa";

import { GrInstagram, GrLinkedin, GrFacebook } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const MainBox = styled.div`
  padding: 0px;
  margin: 0px;
  font-family: roboto-medium-webfont;
  font-weight: 400;
  background-color: white;
`;

const NavBar = styled.div`
  height: 72px;
  width: 100vw;
  /* border-bottom: 1px solid cyan; */
  display: flex;
  box-shadow: 0 1px 5px gray;

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
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 5px;
  }
  button:hover {
    background-color: #e79702;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  p {
    color: #5d4da8;
    font-size: 15px;
    text-align: center;
    margin: 0%;
  }
`;

const CreateForm = styled.div`
  width: 600px;
  margin: auto;
  margin-top: 30px;
  /* border: 2px solid black; */
`;

const UpperPart = styled.div`
  /* border: 2px solid black; */
  text-align: center;
  font-family: "poppins";

  div:nth-child(1) {
    display: flex;
    margin: 0px;
  }
  div:nth-child(1) > h1 {
    margin: 0px;
    margin-left: 120px;
    font-size: 30px;
  }
  div:nth-child(1) > p {
    font-size: 18px;
    margin-top: 14px;
    margin-left: 4px;
  }

  div:nth-child(2) > p {
    margin: 0px;
  }
  div:nth-child(3) {
    display: flex;
    flex-direction: row;
    margin-left: 70px;
  }
  div:nth-child(3) > button {
    padding: 5px;
    margin: 0 10px;
    border-radius: 20px;
    width: 200px;
    text-align: center;
    margin: 15px 8px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    color: #757575;
    border: 1px solid #ddd;
    background: transparent;
    transition: all 0.3s ease;

    svg {
      width: 22px;
      height: 22px;
      margin-right: 8px;
      color: blue;
      /* border-radius: 50%; */
    }
  }

  div:nth-child(3) > button:nth-child(1):hover {
    background-color: #ff3300e4;
    color: #ddd;
    cursor: pointer;
  }
  div:nth-child(3) > button:nth-child(2):hover {
    background-color: #5f5ffa;
    color: #ddd;
    cursor: pointer;
  }
`;

const LowerPart = styled.form`
  font-family: poppins;
  font-weight: 400;
  text-align: left;
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 13px;
    margin-top: 2px;
    /* border: 2px solid black; */
  }
  label {
    font-size: 14px;
  }

  ::-webkit-input-placeholder {
    margin-left: 50px;
    color: yellow;
  }
  p {
    font-size: 12px;
  }
  input[type="submit"] {
    background: #57b228;
    border: 1px solid #57b228;
    color: #fff;
    display: inline-block;
    width: 250px;
    height: 45px;
    font-size: large;
    margin-left: 360px;
  }
  input[type="submit"]:hover {
    background: #306e11;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  width: 95.5%;
  height: auto;
  border-top: 1px solid #c0c0c0;
  margin-top: 30px;
  padding: 30px;

  hr {
    width: 85%;
  }

  div > div {
    /* border: 2px solid black; */
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    text-align: center;

    select {
      width: 150px;
      height: 35px;
      margin-right: 50px;
    }
    p {
      margin: -2px 120px 0px 0px;
      font-size: 14px;
      letter-spacing: 0.5px;
      font-family: "poppins";
    }
    span {
      color: #5d4da8;
    }
    svg {
      margin-left: 30px;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;

export function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => localStorage.setItem("loginStatus", "true"));
    setFormData(formData);

    alert("Registration Succesfull!!");
  };

  return (
    <MainBox>
      <NavBar>
        <NavLink to={"/"}>
          <img
            src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
            alt="logo"
          />
        </NavLink>
        <div className="btn">
          <button>
            <FiUser /> JOBSEEAKER LOGIN
          </button>
          <p>Login as Employer instead </p>
        </div>
      </NavBar>
      <CreateForm>
        <UpperPart>
          <div>
            <h1>Create an Account </h1>
            <p>(it's free)</p>
          </div>
          <div>
            <p>It only takes a couple of minutes to get started</p>
          </div>
          <div>
            <button>
              <FcGoogle />
              Sign Up with Google
            </button>
            <button>
              <SiFacebook />
              Sign Up with Facebook
            </button>
          </div>
          <hr />
        </UpperPart>
        <LowerPart onSubmit={submit} action="/">
          {/* <label htmlFor="file">
            Upload Resume (*.doc, *.docx, *.rtf, *.txt, *.pdf) 6 MB max
            <br />
            <input
              onChange={handleChange}
              name="name"
              type="file"
              placeholder=""
            />
          </label>
          <br /> */}
          <label htmlFor="name">
            Full Name *
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              required
            />
          </label>
          <br />
          <label htmlFor="email">
            Email ID *
            <br />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Please Enter Your Email"
              required
            />
          </label>
          <br />
          <label htmlFor="password">
            Password *
            <br />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Password"
              required
            />
          </label>
          <br />
          <label htmlFor="Mobile">
            Mobile Number *
            <br />
            <input
              onChange={handleChange}
              type="number"
              name="M_Num"
              placeholder="Your Number for Employers to reach you"
              required
            />
          </label>
          <br />
          <label htmlFor="location">
            Current Location *
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="location"
              placeholder="Please Enter Your Location"
              required
            />
          </label>
          <br />
          <label htmlFor="experiance">
            Total Experience *
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="experiance"
              placeholder="Enter Experiance in Years"
              required
            />
          </label>
          <br />
          <label htmlFor="skill">
            Key Skills *
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="skills"
              placeholder="Enter Your Skills"
              required
            />
          </label>
          <br />
          <label htmlFor="indrustry">
            Preferred Industry *
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="indrustry"
              placeholder="Enter Your Prefered Indrustry"
              required
            />
          </label>
          <br />
          <label htmlFor="department">
            Preferred Department/Function *
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="department"
              placeholder="Enter Your Prefered Department"
              required
            />
          </label>
          <br />
          <p>
            By registering, you agree to our Terms and Conditions, Privacy
            Policy and default mailer and communications settings governing the
            use of monsterindia.com.
          </p>
          {/* <NavLink to={"/"}> */}
          <input type="submit" value="Register" />
          {/* </NavLink> */}
        </LowerPart>
      </CreateForm>
      <Footer>
        <div>
          <div>
            <select>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Singapore">Singapore</option>
              <option value="Thailand">Thailand</option>
              <option value="Malaysia">Malaysia</option>
            </select>
            <p>
              <span>
                <FaPhoneSquareAlt />
              </span>{" "}
              Toll No: +91-40-66116611 <br />
              Toll Free No: 1-800-4196666
            </p>
            <p>
              {" "}
              <span>
                <FaEnvelope />
              </span>{" "}
              info@monsterindia.com
            </p>
            <span>
              <GrInstagram />
            </span>
            <span>
              <GrLinkedin />
            </span>
            <span>
              <FaTwitterSquare />
            </span>
            <span>
              <GrFacebook />
            </span>
          </div>
          <hr />
          <div>
            <p>© 2021 Monster - All Rights Reserved</p>
          </div>
        </div>
      </Footer>
    </MainBox>
  );
}
