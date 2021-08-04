import { Typography, Paper } from "@material-ui/core";
import styled from "styled-components";

const Select = styled.select`
  width: 50px;
  option {
    width: 100%;
    font-size: 12px;
  }
`;
const PageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: black;
  margin-bottom: -1rem;
  padding: 1rem;
  .filter {
    display: flex;
  }
  .sortBy {
    width: 120px;
  }
`;

export function PaginationDiv({ showData, setPage, handleSort, searchData }) {
  const noOfPages = Math.ceil(showData.length / 10);
  console.log(noOfPages);
  const pages = [];
  //   const sortBy = ["Relevance", "Freshness"];
  for (let i = 1; i <= noOfPages; i++) pages.push(i);

  const handleOnChange = (e) => {
    const x = e.target.value;
    setPage(x);
  };

  return (
    <Paper>
      <PageDiv>
        <div>
          <Typography variant="h6">
            Showing {showData.length} results{" "}
            {searchData.query !== "i" ? `for "${searchData.query}"` : ""}{" "}
            {searchData.location ? `in "${searchData.location}"` : ""}
          </Typography>
        </div>
        <div className="filter">
          <div>Page:</div>
          <Select onChange={handleOnChange}>
            {pages.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </Select>
        </div>
      </PageDiv>
    </Paper>
  );
}
