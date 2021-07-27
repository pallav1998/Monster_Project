import styles from "./home.module.css";

// import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
// import { Fragment } from 'react';

import { Findjobs } from "./findjobs.jsx";

import { Jobdiv } from "./job";

import { Joblinks } from "./joblinks";

const wfh = [
  {
    company: "Jobxpert Solutions",
    role: "Airport Representative",
    exp: " 0-5 years",
    loc: "Kozhikode / Calicut , Dispur",
  },
  {
    company: "Accord Infosystems",
    role: "RPA Developer",
    exp: " 3-7 years ",
    loc: "Mumbai , Thane, Chennai",
  },
  {
    company: "Virtusa Software Services Private Limited",
    role: "Sr. Java Developer",
    exp: "6-11 years ",
    loc: "Bengaluru / Bangalore , Chennai",
  },
];
const recent = [
  {
    company: "Tata Mutual Fund",
    role: "Branch Manager ",
    exp: " Not Specified",
    loc: "Nagpur , Chennai,India",
  },
  {
    company: "Synechron Technologies Private Limited",
    role: "Java FullStack Developer",
    exp: " 4 - 12 Yrs ",
    loc: "Mumbai/ Bangalore, pune",
  },
  {
    company: "Virtusa Software Services Private Limited",
    role: "Sr. Java Developer",
    exp: "6-11 years ",
    loc: "Bengaluru / Bangalore , Chennai",
  },
];
const resume = [
  {
    img: "https://media.monsterindia.com/trex/prod-cdn/media/product/2018/october/DZjYfGoeHQ8Ese8lZnCaAWQwkmh0cMd9LCphNIJi.png",
    head: "Career Booster",
    p: "The best pack to better your chances of finding a job faster.",
  },
  {
    img: "https://media.monsterindia.com/trex/prod-cdn/media/product/2018/october/1lVkq2Yfi8Hg1rOMrLYrljGmkHzWCpetLiZTFjkT.png",
    head: "Right Resume",
    p: "Get a professionally written resume that is just right for your career goals!",
  },
  {
    img: "https://media.monsterindia.com/trex/prod-cdn/media/product/2018/october/wNt90Vciwjtw05UbukHOpwS7RMYiGCkw9cKwWiAG.png",
    head: "Xpress Resume+",
    p: "Speed up your job hunt with XpressResume+ Find Better. Faster!",
  },
];
function Info() {
  return (
    <div>
      <div className={styles.main_info}>
        <div className={styles.info_cont}>
          <div>
            <img
              src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-1.png"
              alt=""
            />
            <div>
              <h3>What it feels like to have 48% more interview calls?</h3>
              <p>To get 5x more recruiter views on your profile</p>
              <button>Ask here</button>
            </div>
          </div>
          <Jobdiv head={"Work From Home Jobs"} ele={wfh} sidebtn={true} />
          <Jobdiv head={"Recent Jobs"} ele={recent} sidebtn={true} />
          <Jobdiv head={"Resume Services"} ele={resume} sidebtn={false} />
          <Findjobs />
          <div className={styles.contact_mobile}>
            <div>
              <p>
                Find Better {"&"} Faster with Monster Career Services
                <br />
                Call 1-800-4196666 now! (Toll-free)
              </p>
            </div>
            <div>
              <input type="text" placeholder="Enter your mobile number" />
              <button>Get a Call Back</button>
            </div>
          </div>
          <div>
            <div className={styles.jobs_div}>
              <h2>Monster Research and Reports</h2>
              <div
                className={styles.report}
                style={{ flexDirection: "column" }}
              >
                <h3>Monster Employment Index</h3>
                <p>
                  The Monster Employment Index is a broad and comprehensive
                  monthly analysis of online job posting activity conducted by
                  Monster India.
                </p>
                <a href="#a">Learn More</a>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.advice}>
              <h2>Career Advice and Tips</h2>
              <div>
                <div>
                  <p>
                    Resume Format for Freshers: Writing guide, Tips, Samples
                  </p>
                  <p>
                    Student Resume Examples: Samples, Guide , Writing Tips to
                    get Internship Quickly
                  </p>
                  <p>Objective for Resume for Fresher and Experienced</p>
                </div>
                <div>
                  <p>Professional Resume Summary: Examples , Writing Tips</p>
                  <p>
                    Career Options After 12th PCB , High Salary Courses After
                    12th PCB
                  </p>
                  <p>How to write an application for a teaching job</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.info_headings}>
          <Joblinks head={"Jobs by Top Skills"} />
          <Joblinks head={"Popular Designations"} />
        </div>
      </div>
    </div>
  );
}

export { Info };
