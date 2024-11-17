import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";

// Global Styles
import "bootstrap/dist/css/bootstrap.min.css";
import DemoPath from "./components/demo-path";
import "./styles/defaults.css";
import JoinUs from "./components/joinus/joinus";
import GetStarted from "./components/get-started/get-started";
import Execom from "./components/execom/execom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/social/:handle" element={<DemoPath />} />
        <Route path="/joinus/guide" element={<GetStarted />} />
        <Route path="/community/tasks" element={<DemoPath />} />
        <Route path="/community/interest-groups" element={<DemoPath />} />
        <Route path="/campus-chapter/execom" element={<Execom />} />
        <Route path="/community/faq" element={<DemoPath />} />
        <Route path="/campus-chapter/events" element={<DemoPath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
