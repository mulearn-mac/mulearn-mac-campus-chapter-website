import { Tab } from "react-bootstrap";
import "../../../styles/joinus.css";

import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import Step6 from "./step-6";
import Step7 from "./step-7";
import Header from "./header";

function JoinUsTabs({ activeTab }) {

  return (
    <div className="en-Oxanium">
      <Header />
      <h2 className="h2 text-center text-secondary py-2 ">How to Join Us ??</h2>

      <Tab.Container activeKey={activeTab}>
        <Tab.Content>
          <Tab.Pane className="px-3" eventKey="step-1">
            <Step1 />
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-2">
            <Step2 />
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-3">
            <Step3 />
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-4">
            <Step4 />
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-5">
            <Step5 />
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-6">
            <Step6 />
          </Tab.Pane>

          <Tab.Pane className="px-3" eventKey="step-7">
            <Step7 />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default JoinUsTabs;
