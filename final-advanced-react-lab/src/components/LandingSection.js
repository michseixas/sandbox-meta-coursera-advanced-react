import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import './LandingSection.css';

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img className="profile" src="https://i.pravatar.cc/150?img=7" alt="Girl in a jacket" />
    <p>{greeting}</p>
    <br></br>

    <p className="developer">{bio1}</p>
    <p className="developer">{bio2}</p>

  </FullScreenSection>
);

export default LandingSection;
