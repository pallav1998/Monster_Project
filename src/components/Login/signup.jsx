import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { FaPhoneSquareAlt, FaEnvelope, FaTwitterSquare } from "react-icons/fa";
import { GrInstagram, GrLinkedin, GrFacebook } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import {
  CreateForm,
  Footer,
  LowerPart,
  MainBox,
  NavBar,
  UpperPart,
} from "./signup_css";

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
