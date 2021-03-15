import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navegador from "./components/Navegador";
import Postar from "./components/Postar";

import Feed from "./pages/Feed";
import Home from "./pages/Home";

import Make from "./assets/make.svg";
import NotFound from "./assets/notfound.svg";

function App() {
  return (
    <Router>
      <Navegador />

      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <Redirect to={`${process.env.PUBLIC_URL}/home`} />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/feed`}>
          <Feed />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/postar`}>
          <Postar />
        </Route>

        <Route exact path={`${process.env.PUBLIC_URL}/conta`}>
          <div className="container center">
            <img src={Make} alt="construct"></img>
          </div>
        </Route>

        <Route path="/*">
          <div className="container center">
            <img src={NotFound} alt="not found"></img>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
