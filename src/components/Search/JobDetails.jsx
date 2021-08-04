import styled from "styled-components";
import { GiTwoCoins } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";

const DetailsDiv = styled.div`
  display: flex;
  width: 55vw;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  background-color: #f5f5f5;
  margin: 2rem 0;
  color: #000000;
  .medium-Font {
    font-size: 14px;
  }
  .regular-Font {
    font-size: 12px;
  }

  .locationDiv {
    display: flex;
    width: 100%;
    text-align: left;
    margin: 8px 0 8px;
  }
  .company_name {
    color: #5d4da8;
  }
  .locationDiv > div:first-child {
    width: 50%;
  }
  .locationDiv > div:nth-child(2) {
    width: 25%;
  }
  .locationDiv > div:last-child {
    width: 25%;
  }
  .description {
    text-align: justify;
  }
  .skillset {
    margin: 0.5rem 0;
    color: #787878;
  }
  .skillset > span {
    font-weight: 900;
  }
  .gray-color {
    color: #505050;
  }
  button {
    position: relative;
  }
`;

const JobDetails = ({ details }) => {
  return (
    <Paper>
      <DetailsDiv>
        <div>
          <div className="medium-Font">{details.title}</div>
        </div>
        <div>
          <div className="company_name regular-Font">
            {details.company_name
              ? details.company_name
              : "Company: Not Specified"}
          </div>
        </div>
        <div className="locationDiv regular-Font">
          <div>
            <GoLocation />
            {details.location}
          </div>
          <div>
            <BsBriefcaseFill /> Not Specified
          </div>
          <div>
            <GiTwoCoins />
            Best in industry
          </div>
        </div>
        <div className="description regular-Font gray-color">
          {details.description.slice(28, 250)}...
        </div>
        <div className="skillset regular-Font">
          <span className="gray-color">Skills</span> : Data Entry , Back Office
          , Non voice , Backend , Back Office Executive , Office Assistant ,{" "}
        </div>
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => {
            e.target.style.color = "green";
            e.target.innerHTML = "APPLIED";
            setTimeout(() => {
              alert("Successfully applied for this job");
            }, 2000);
          }}
        >
          Apply
        </Button>
      </DetailsDiv>
    </Paper>
  );
};

export { JobDetails };
