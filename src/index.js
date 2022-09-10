
import React from "react";
// import ReactDOM from "react-dom/client";
import {render} from "react-dom";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

import Index from "views/Index.js";
import JituResume from "views/examples/JituResume";
import PranitResume from "views/examples/PranitResume";
import SumedhResume from "views/examples/SumedhResume";
import PrinceResume from "views/examples/PrinceResume";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = document.getElementById("root");


render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
     
      <Route
        path="/jitu-resume"
        render={(props) => <JituResume {...props} />}
      />
      <Route
        path="/pranit-resume"
        render={(props) => <PranitResume {...props} />}
      />
      <Route
        path="/sumedh-resume"
        render={(props) => <SumedhResume {...props} />}
      />
      <Route
        path="/prince-resume"
        render={(props) => <PrinceResume {...props} />}
      />
     
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,root
);
