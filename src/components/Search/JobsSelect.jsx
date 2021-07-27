import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  btn: {
    border: 0,
    borderBlockColor: 0,
    color: "white",
    fontSize: "1.1rem",
    margin: "1rem 0 -3rem 0",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  btnRed: (props) => {
    console.log(props);
  },
});

export function JobsSelect() {
  const btns = [
    "All Jobs",
    "Work From Home",
    "Covid-19 Resources",
    "Contract Jobs",
    "Fresher Jobs",
  ];

  const classes = useStyle();

  return (
    <div>
      {btns.map((el) => (
        <NavLink to={`/SearchResults/ / `} style={{ textDecoration: "none" }}>
          <Button className={classes.btn} btnRed={el}>
            {el}
          </Button>
        </NavLink>
      ))}
    </div>
  );
}
