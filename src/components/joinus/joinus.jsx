import React, { useEffect, useState } from "react";
import NavBar from "../common/nav-bar";
import JoinUsOffcanvas from "./join-us-offcanvas";
import JoinUsTabs from "./join-us-tabs";
import Footer from "../common/footer";

function JoinUs() {
  const [activeTab, setActiveTab] = useState("step-1");
  useEffect(() => {
    console.log("Active Tab: ", activeTab);
  }, [activeTab]);
  return (
    <div>
      <NavBar />
      <JoinUsOffcanvas activeTab={activeTab} setActiveTab={setActiveTab} />
      <JoinUsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
}

export default JoinUs;
