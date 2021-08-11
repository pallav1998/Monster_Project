import { useState, useRef } from "react";
import { allJobsTitle, allCities, years } from "./Data";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, ListItem, InputAdornment } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { GiTwoCoins } from "react-icons/gi";

const InputDiv = styled.div`
  display: flex;
  margin: auto;
  margin-top: 60px;
  width: 100%;
  div {
    display: flex;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .loc {
    width: 20%;
  }
  .queryIp {
    flex-grow: 1;
    /* color: ; */
  }
  input {
    width: 100%;
    flex-grow: 1;
    border: 1px solid gray;
    border-radius: 2px;
  }
  select {
    width: 100%;
  }
  Button {
    width: 100%;
    color: white;
  }
  .search {
    width: 12rem;
  }
  .dropDown {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: absolute;
    background-color: white;
    width: 100%;
    top: 100%;
  }
  .listTheme {
    border-bottom: 1px solid gray;
    width: 100%;
    padding: 0.5rem;
    font-size: 12px;
    color: #000;
  }
`;

export default function SearchBar({ handleFocus, show }) {
  const [jobsTitle, setJobsTitle] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [formData, setFormData] = useState({});
  const [cities, setCities] = useState([]);
  const [showCities, setShowCities] = useState(false);

  const locationIpBox = useRef();
  const queryIpBox = useRef();

  const handleOnChange = (e) => {
    setShowCities(false);
    queryIpBox.current.value = e.target.value;
    setFormData({
      ...formData,
      [queryIpBox.current.name]: queryIpBox.current.value,
    });
    if (e.target.value.length > 2) {
      setShowTitle(true);
      setJobsTitle(
        allJobsTitle.filter((el) => {
          let k = el.toLowerCase();
          let city = e.target.value.toLowerCase();
          return k.includes(city);
        })
      );
    } else {
      setShowTitle(false);
      setJobsTitle([]);
    }
  };

  const handleFormData = (el, ref) => {
    setShowTitle(false);
    setShowCities(false);
    ref.current.value = el;
    setFormData({ ...formData, [ref.current.name]: ref.current.value });
  };

  const handleChange = (e) => {
    setShowTitle(false);
    setFormData({
      ...formData,
      [locationIpBox.current.name]: locationIpBox.current.value,
    });
    if (e.target.value.length > 2) {
      setShowCities(true);
      setCities(
        allCities.filter((el) => {
          let k = el.toLowerCase();
          let city = e.target.value.toLowerCase();
          return k.includes(city);
        })
      );
    } else {
      setShowCities(false);
      setCities([]);
    }
  };

  const handleQuery = () => {
    setShowTitle(false);
    setShowCities(false);
  };

  return (
    <InputDiv>
      <div className="queryIp">
        <input
          ref={queryIpBox}
          name="query"
          placeholder="Search by skills, Company & job title"
          onFocus={handleFocus}
          onChange={handleOnChange}
          onFocusOut={() => setShowTitle(false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GiTwoCoins />
              </InputAdornment>
            ),
          }}
        />
        {showTitle && (
          <div className="dropDown">
            {jobsTitle.slice(0, 5).map((el) => (
              <ListItem button className="listTheme">
                <ListItemText
                  primary={`${el}`}
                  onClick={() => handleFormData(el, queryIpBox)}
                />
              </ListItem>
            ))}
          </div>
        )}
      </div>

      {show && (
        <div className="loc">
          <input
            ref={locationIpBox}
            name="location"
            placeholder="Location"
            onChange={handleChange}
            onFocusOut={() => setShowCities(false)}
          />
          {showCities && (
            <div className="dropDown">
              {cities.slice(0, 5).map((el) => (
                <ListItem button>
                  <ListItemText
                    primary={`${el}`}
                    onClick={() => handleFormData(el, locationIpBox)}
                  />
                </ListItem>
              ))}
            </div>
          )}
        </div>
      )}

      {/* {show && <LocationAndExpInp years={years} />} */}

      {show && (
        <div className="loc">
          <select>
            <option value="" hidden>
              Experiance
            </option>
            {years.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </select>
        </div>
      )}
      <div className="btn">
        <NavLink
          style={{ textDecoration: "none" }}
          onClick={handleQuery}
          to={`/SearchResults/${formData.query}/${formData.location}`}
        >
          <Button
            className="search"
            variant="contained"
            color="primary"
            size="large"
          >
            Search
          </Button>
        </NavLink>
      </div>
    </InputDiv>
  );
}
