import axios from "axios";

const allJobsTitle = [];
const allJobs = [];
const allCities = [];
const years = [];
const loginData = [];
// let uniqueTitles = {};

axios
  .get("http://localhost:3001/jobs")
  .then(({ data }) => {
    data.forEach((element) => {
      allJobs.push(element);
    });
  })
  .catch((err) => {
    // console.error(err);
  });

  // console.log(allJobs);

// Jobs Data
axios
  .get("http://localhost:3001/titles")
  .then(({ data }) => {
    data.forEach((el) => {
      allJobsTitle.push(el);
    });
  })
  .catch((err) => {
    // console.error(err);
  });

// Cities Data
axios
  .get("http://localhost:3001/cities")
  .then(({ data }) => {
    data.forEach((element) => {
      allCities.push(element.city);
    });
  })
//Profile
axios
  .get("http://localhost:3001/login")
  .then(({ data }) => {
    data.forEach((element) => {
      loginData.push(element);
    });
    console.log(loginData);
  })

//Years

for (let i = 0; i <= 50; i++) {
  i < 2 ? years.push(i + " year") : years.push(i + " years");
}

export { allJobsTitle, allCities, years, allJobs, loginData };
