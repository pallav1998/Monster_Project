import { useState, useEffect } from "react";
import { Footer } from "../body/footer";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { NavLink, Redirect } from "react-router-dom";
import { loginData } from "../Search/Data";
import { Box, LeftSide, MainBox, NavBar, RightSide } from "./login_css";

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
    setTime(crousal);
  };

  useEffect(() => {
    DataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isLoggedIn, setIsloggedIn] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // console.log(loginData, formData);
    loginData.forEach((el) => {
      if (el.name === formData.name) {
        if (el.password === formData.password) {
          localStorage.setItem("loggedin", JSON.stringify("1"));
          // console.log(isLoggedIn);
          setIsloggedIn(true);
        }
      }
    });
  };


  return (
    <MainBox>
      {isLoggedIn && <Redirect to={"/"} />}
      <NavBar>
        <NavLink to={"/"}>
          <img
            src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
            alt="logo"
          />
        </NavLink>
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
          <div>
            <img
              src="https://www.monsterindia.com/rio/public/images/carousel_2.svg"
              alt="img2"
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

      <Footer />
    </MainBox>
  );
}
