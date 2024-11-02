import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";

function JoinUsOffcanvas({ activeTab, setActiveTab }) {
  const [show, setShow] = useState(false);

  return (
    <div className="position-fixed top-25 m-2">
      <Button className="" variant="primary" onClick={() => setShow(true)}>
        STEPS
      </Button>
      <Offcanvas
        className="w-fit"
        show={show}
        onHide={() => setShow(false)}
        placement="start"
      >
        <Offcanvas.Header
          className="border-bottom border-2 border-success "
          closeButton
        >
          <Offcanvas.Title>Join US</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            className="d-flex flex-column"
            activeKey={activeTab}
            onSelect={(key) => {
              setActiveTab(key);
              setShow(false);
            }}
          >
            <Nav.Item className="border-bottom border-dark px-0 py-1">
              <Nav.Link
                className="small link-primary text-nowrap p-0"
                eventKey="step-1"
              >
                Register for a muLearn account and obtain your muId
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="border-bottom border-dark px-0 py-1">
              <Nav.Link
                className="small link-primary text-nowrap p-0"
                eventKey="step-2"
              >
                Create a Discord account and Join muLearn Discord server.
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="border-bottom border-dark px-0 py-1">
              <Nav.Link
                className="small link-primary text-nowrap p-0"
                eventKey="step-3"
              >
                Accept rules and conditions.
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="border-bottom border-dark px-0 py-1">
              <Nav.Link
                className="small link-primary text-nowrap p-0"
                eventKey="step-4"
              >
                Connect your muId with your discord account.
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="border-bottom border-dark px-0 py-1">
              <Nav.Link
                className="small link-primary text-nowrap p-0"
                eventKey="step-5"
              >
                Introduce yourself to the community.
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="border-bottom border-dark px-0 py-1">
              <Nav.Link
                className="small link-primary text-nowrap p-0"
                eventKey="step-6"
              >
                Join Discord server of our Campus Chapter
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="border-bottom border-dark px-0 py-1">
              <Nav.Link
                className="small link-primary text-nowrap p-0"
                eventKey="step-7"
              >
                muLearn: A Guide for Beginners.
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default JoinUsOffcanvas;
