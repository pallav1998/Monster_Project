import { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const MainBox = styled.div`
  padding: 0px;
  margin: 0px;
  font-family: roboto-medium-webfont;
  font-weight: 400;
`;

const NavBar = styled.div`
  height: 70px;
  width: 100vw;
  border-bottom: 1px solid cyan;
  display: flex;

  img {
    margin-left: 185px;
    width: 8%;
    margin-right: 50vw;
  }
  button {
    border: 1px solid #3c3c3c;
    background-color: white;
    box-shadow: unset;
    color: #3c3c3c;
    padding: 8px;
    margin-top: 10px;
  }
  button:hover {
    background-color: green;
    color: white;
    cursor: pointer;
  }
  p {
    margin-top: 3px;
    color: #5d4da8;
    font-size: 13px;
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

  div:nth-child(1) {
    display: flex;
    margin: 0px;
  }
  div:nth-child(1) > h1 {
    margin: 0px;
    margin-left: 120px;
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
  font-family: poppins-bold-webfont;
  font-weight: 400;
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
  width: 100vw;
  height: 130px;
  background-color: #f6e2f6;
  margin-top: 50px;

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
      height: 30px;
    }
    svg {
      width: 32px;
      height: 32px;
      margin-right: 20px;
      margin-top: 12px;
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
    });
    setFormData(formData);
  };

  return (
    <MainBox>
      <NavBar>
        <img
          src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
          alt="logo"
        />
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
        <LowerPart onSubmit={submit}>
          <label htmlFor="file">
            Upload Resume (*.doc, *.docx, *.rtf, *.txt, *.pdf) 6 MB max
            <br />
            <input
              onChange={handleChange}
              name="name"
              type="file"
              placeholder=""
            />
          </label>
          <br />
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
          <input type="submit" value="Next: Start Applying Now >" />
        </LowerPart>
      </CreateForm>
      <Footer>
        <div>
          <div>
            <div>
              <select name="country" onChange={handleChange}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Singapore">Singapore</option>
                <option value="Thailand">Thailand</option>
                <option value="Malaysia">Malaysia</option>
              </select>
            </div>
            <div>
              <FiPhone />
              <p>Toll No: +91-40-66116611 </p>
            </div>
            <div>
              <FiMail />
              <p>info@monsterindia.com</p>
            </div>
            <div>
              <FiInstagram />
              <AiFillLinkedin />
              <AiFillTwitterCircle />
              <SiFacebook />
            </div>
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
