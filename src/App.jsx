// import { SearchBox } from "./components/SearchBox";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResults from "./components/Search/SearchResults";
import Apply from "./components/Search/Apply";
import { Home } from "./components/body/home";
import { Login } from "./components/Login/login";
import { SignUp } from "./components/Login/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/SearchResults/:query/:location">
            <SearchResults />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/Apply/:jobTitle">
            <Apply />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    // <div>
    //   <Home/>
    // </div>
  );
}

export default App;
