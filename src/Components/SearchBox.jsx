import styled from "styled-components";
import { useState } from "react";
import { JobsSelect } from "./JobsSelect";
import SearchBar from "./SearchBar";

const SearchBoxDiv = styled.div`
  width: ${(props) => (!props.width ? "55%" : "90%")};
  font-size: 12px;
  background-color: black;
  opacity: 75%;
  padding: 0.5rem;
  height: 200px;
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
    font-size: 0.75rem;
    padding: 1rem;
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

export function SearchBox() {
  const [show, setShow] = useState(false);

  const handleFocus = () => setShow(true);

  return (
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
      <button
        className="closeBtn"
        display={show}
        color={show}
        onClick={() => setShow(false)}
      >
        X
      </button>
    </SearchBoxDiv>
  );
}
