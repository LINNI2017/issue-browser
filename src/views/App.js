import React from "react"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import MainPage from "./MainPage"
import IssuePage from "./IssuePage"
export const BASE_URL = "https://api.github.com/repos/walmartlabs/thorax/issues"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/issue/:id" component={IssuePage} />
          <Route path="*" render={() => <Redirect to="/main" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
