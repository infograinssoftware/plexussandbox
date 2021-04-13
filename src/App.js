// import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./views/login/Login";
import Signup from "./views/signup/signup";
// import Plexuswrapper from "./views/plexuswrapper/index";
import AuthLogin from "./views/auth_login/auth_login"
import Home from "./views/home/home";
// import PlexusMoney from "./views/plexusMoney/plexusMoney";

function App() {
  return (
    <div className="App bg_Style plexusMoney_bg_Style">
      <BrowserRouter>
      <Switch>
     
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/signup" component={Signup} />
        {/* <Route exact={true} path="/plexuswrapper" component={Plexuswrapper} /> */}
        <Route exact={true} path="/auth_login" component={AuthLogin} />
        <Route exact={true} path="/plexussandbox" component={Home} />
        {/* <Route exact={true} path="/plexusMoney" component={PlexusMoney} /> */}
      </Switch>
      </BrowserRouter>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
