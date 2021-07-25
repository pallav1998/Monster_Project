import { SearchBox } from "./Components/SearchBox";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResults from "./Components/SearchResults";
import Apply from "./Components/Apply";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/SearchResults/:query/:location">
            <SearchResults />
          </Route>
          <Route path="/Apply/:jobTitle">
            <Apply />
          </Route>
          <Route path="/" exact>
            <SearchBox />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
