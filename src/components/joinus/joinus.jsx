import { useEffect, useState } from "react";
import NavBar from "../common/nav-bar";
import JoinUsOffcanvas from "./joinus-components/offcanvas";
import JoinUsTabs from "./joinus-components/tabs";
import Footer from "../common/footer";

function JoinUs() {
  const [activeTab, setActiveTab] = useState("step-1");
  useEffect(() => {
    document.title = "Steps to Join mmulearn";
  }, []);
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
