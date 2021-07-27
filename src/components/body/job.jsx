import styles from "./home.module.css";

import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Fragment } from "react";

import { v4 as uuid } from "uuid";

function Jobinfo({ ele }) {
  return (
    <Fragment>
      <a href="#a">
        <div>
          <h5>{ele.company}</h5>
          <h6>{ele.role}</h6>
          <p>Experience:{ele.exp}</p>
          <p>Location:{ele.loc}</p>
        </div>
      </a>
    </Fragment>
  );
}
function Resume({ ele }) {
  return (
    <Fragment>
      <a href="#a" style={{ padding: "0px", height: "150px", width: "255px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img style={{ height: "150px" }} src={ele.img} alt="" />
          </div>
          <div>
            <h4 style={{ margin: "5px" }}>{ele.head}</h4>
            <p style={{ margin: "5px 0 20px 5px" }}>{ele.p}</p>
            <a href="#a" style={{ marginLeft: "80px", textDecoration: "none" }}>
              Read More
            </a>
          </div>
        </div>
      </a>
    </Fragment>
  );
}

export function Jobdiv({ head, sidebtn, ele }) {
  return (
    <Fragment>
      <div>
        <div className={styles.jobs_div}>
          <h2>{head}</h2>
          <a href="#a">view all {">"}</a>
          <div>
            <div style={{ display: sidebtn ? "block" : "none" }}>
              <CgChevronLeft />
            </div>
            <div className={styles.job_info}>
              {sidebtn ? (
                <>
                  {ele.map((ele) => {
                    return <Jobinfo ele={ele} key={uuid()} />;
                  })}
                </>
              ) : (
                <>
                  {ele.map((ele) => {
                    return <Resume ele={ele} key={uuid()} />;
                  })}
                </>
              )}
            </div>
            <div style={{ display: sidebtn ? "block" : "none" }}>
              <CgChevronRight />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
