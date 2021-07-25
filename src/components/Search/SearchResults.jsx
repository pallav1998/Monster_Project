import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { allJobs } from "./Data";
import { JobDetails } from "./JobDetails";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { PaginationDiv } from "./PaginationDiv";
import { Filters } from "./Filters";
import { SearchLinks } from "./SearchLinks";
import { Nav } from "../body/nav";
import { Footer } from "../body/footer.jsx";

const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchBarDiv = styled.div`
  margin: 1rem 0;
  padding: 2rem 3rem;
  background-color: #e8e8e8;
`;

export default function SearchResults() {
  const [showData, setShowData] = useState([]);
  const [page, setPage] = useState(1);

  const p1 = useParams();

  if (p1.query === "undefined") p1.query = "";
  if (p1.location === "undefined") p1.location = "";

  console.log(p1);

  useEffect(() => {
    setShowData(
      allJobs
        .filter((el) => {
          return el.title.toLowerCase().includes(p1.query.toLowerCase());
        })
        .filter((el) => {
          return el.location.toLowerCase().includes(p1.location.toLowerCase());
        })
    );
    setPage(1);
  }, [p1]);

  console.log(p1);

  const handleSort = (e) => {
    if (e.target.value === "Freshness") {
      showData.sort((a, b) => a.date_posted.localeCompare(b.date_posted));
    }
  };

  return (
    <>
      <Nav />
      <SearchBarDiv>
        <SearchBar show={true} />
      </SearchBarDiv>

      <SearchArea>
        <Filters />
        {showData.length > 0 ? (
          <div>
            <PaginationDiv
              showData={showData}
              setPage={setPage}
              handleSort={handleSort}
              searchData={p1}
            />
            {showData.slice((page - 1) * 10, page * 10).map((el) => (
              <div key={el.id}>
                <JobDetails details={el} />
              </div>
            ))}
          </div>
        ) : (
          <h3>No Matching Jobs</h3>
        )}
        <SearchLinks />
      </SearchArea>
      <hr />
      <Footer />
    </>
  );
}
