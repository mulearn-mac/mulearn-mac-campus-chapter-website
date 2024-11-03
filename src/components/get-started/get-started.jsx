import "../../styles/mu-guide.css";
import Header from "./get-started-components/header";
import NavBar from "../common/nav-bar";
import Guide from "./get-started-components/guide";
import Footer from "../common/footer";

function GetStarted() {
  return (
    <div className="en-Oxanium">
      <NavBar />
      <h1 className="text-center text-secondary pt-5 pb-0">
        Getting Started with <span className="en-mulearn">μlearn</span>
      </h1>
      <Header />
      <Guide />
      <Footer />
    </div>
  );
}

export default GetStarted;
