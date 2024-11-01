import React from "react";
import NavBar from "../common/nav-bar";
import Hero from "./hero-section";
import CounterSection from "./counter-section";
import OfficialLinks from "./official-links";
import WhatsMulearn from "./whats-mulearn";
import KeyPoints from "./key-points";
import ConnectCompeteLearn from "./connect-compete-learn";
import LearnAndGrow from "./learn-grow";
import FAQList from "../frequently-asked-questions/faq-list";
import Footer from "../common/footer";

function Home() {
  return (
    <div className="en-Oxanium">
      <NavBar />
      <Hero />
      <CounterSection />
      <OfficialLinks />
      <WhatsMulearn />
      <KeyPoints />
      <ConnectCompeteLearn />
      <LearnAndGrow />
      <FAQList />
      <Footer />
    </div>
  );
}

export default Home;
