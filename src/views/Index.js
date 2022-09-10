
import React from "react";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import Homepage from "components/Headers/Homepage";
import Members from "./examples/Members";
import Resources from "./examples/Resources";
import Contact from "./examples/Contact";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>        
      <ExamplesNavbar />
      <Homepage />
      <Members/>
      <Resources/>
      <Contact/>
    </>
  );
}

export default Index;
