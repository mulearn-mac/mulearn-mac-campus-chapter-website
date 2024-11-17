import { Navbar } from "react-bootstrap";
import Header from "./execom-components/header";
import "../../styles/execom.css";
import MembersSection from "./execom-components/members-section";
import Footer from "../common/footer";

function Execom() {
  return (
    <div className="en-Oxanium">
      <Navbar />
      <Header />
      <MembersSection />
      <Footer />
    </div>
  );
}

export default Execom;
