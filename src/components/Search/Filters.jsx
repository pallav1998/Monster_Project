import styled from "styled-components";
import { GrFormAdd } from "react-icons/gr";

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 2px;
  width: 20vw;
  li {
    display: flex;
    justify-content: space-between;
    background-color: white;
    list-style: none;
    font-size: 1.2rem;
    padding: 0.5rem;
    font-family: "Poppins", sans-serif;
  }
  span {
    text-align: right;
  }
  input {
    font-size: 1.2rem;
    width: 100%;
    border: 1px solid #e4e0e0;
    padding: 0.5rem 0;
    margin-top: -0.8rem;
  }
`;

export function Filters() {
  const filters = [
    "Function",
    "Role",
    "Experince",
    "City",
    "Salary",
    "Qualification",
    "Employer Type",
    "Top Companies",
    "Industry",
    "Job Freshness",
    "Job Type",
  ];

  return (
    <Filter>
      <input placeholder="Filter..." />
      {filters.map((el) => {
        return (
          <li>
            <div>{el}</div>
            <div>
              <GrFormAdd />
            </div>
          </li>
        );
      })}
    </Filter>
  );
}
