import { NavLink } from "react-router-dom";
import { allCities } from "./Data";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const RelatedSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 1rem;
  padding: 2rem 1rem;
  background-color: white;
  width: 25vw;
  height: fit-content;
  .link {
    padding: 0.5rem;
  }
`;

export function SearchLinks() {
  const cities = [];

  for (let i = 0; i < 25; i++) {
    cities.push(allCities[Math.floor(Math.random() * allCities.length)]);
  }

  return (
    <RelatedSearchWrapper>
      <Typography variant="h5">Related Search</Typography>
      {cities.map((el) => {
        return (
          <NavLink
            className="link"
            to={`/SearchResults/i/${el}`}
            style={{ textDecorationLine: "none" }}
          >
            Jobs in {el}
          </NavLink>
        );
      })}
    </RelatedSearchWrapper>
  );
}
