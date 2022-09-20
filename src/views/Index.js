
import React from "react";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import Homepage from "components/Headers/Homepage";
// import Members from "./examples/Members";
import Resources from "./examples/Resources";
import Contact from "./examples/Contact";
import Memberstemp from "./examples/Memberstemp";


function Index() {
  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("index");
  //   return function cleanup() {
  //     document.body.classList.remove("index");
  //   };
  // });
  return (
    <>
      <ExamplesNavbar />
      <Homepage />
      <Memberstemp />
      <Resources />
      <Contact />
      {/* <Switch>
        <Route path="/jitu-resume">
          <JituResume />
        </Route>
      </Switch> */}
    </>
  );
}

export default Index;
