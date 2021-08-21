import styled from "styled-components";
import { useState } from "react";
import { JobsSelect } from "./JobsSelect";
import SearchBar from "./SearchBar";

const SearchBoxDiv = styled.div`
  width: ${(props) => (!props.width ? "60%" : "100%")};
  font-size: 12px;
  background-color: black;
  opacity: 75%;
  padding: 0.5rem;
  height: 300px;
  position: relative;
  margin: ${(props) => (props.margin ? "auto" : "")};
  .searchBar {
    margin: 2rem;
  }
  .trendingSearch {
    display: flex;
    position: absolute;
    color: white;
    text-align: left;
    font-size: 1.2rem;
    padding: 4rem;
    bottom: 1px;
  }
  .trendingSearch > div:first-child {
    display: flex;
    flex-wrap: nowrap;
    font-weight: 900;
  }
  .advancedSearch {
    color: white;
    position: absolute;
    right: 50px;
    font-size: 1.2rem;
  }
  .closeBtn {
    display: ${(props) => (props.display ? "block" : "")};
    position: absolute;
    color: ${(props) => (props.color ? "black" : "white")};
    background-color: black;
    opacity: 0.75;
    border: none;
    font-size: 1.5rem;
    right: 1px;
    top: 1px;
  }
`;

const Box = styled.div`
  display: flex;
  vertical-align: middle;
  width: 90%;
  flex-direction: column;
  gap: 0;
  margin: auto;
  h1 {
    margin: 0;
    padding: 0%;
    margin-top: 2%;
    text-align: left;
    font-family: "Poppins", sans-serif;
    color: white;
  }
  span {
    font-weight: 100;
  }
`;

export function SearchBox() {
  const [show, setShow] = useState(false);

  const handleFocus = () => setShow(true);

  return (
    <Box>
      <h1>
        400,000+ Jobs. <span>Find Better. Faster</span>
      </h1>
      <SearchBoxDiv width={show} margin={show}>
        {!show && <JobsSelect />}

        <div className="searchBar">
          <SearchBar handleFocus={handleFocus} show={show} />
          <div className="advancedSearch">Advanced Search</div>
        </div>
        <div className="trendingSearch">
          <div>Trending Searches :</div>
          <div>
            Jobs in Delhi, Jobs in Mumbai, Jobs in Hyderabad, Jobs in Bangalore,
            Jobs in Chennai
          </div>
        </div>
        {show ? (
          <button
            className="closeBtn"
            display={show}
            color={show}
            onClick={() => setShow(false)}
          >
            X
          </button>
        ) : (
          ""
        )}
      </SearchBoxDiv>
    </Box>
  );
}
