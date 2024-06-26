import React from "react";
import HeroComponent from "./components/HeroComponent";
import AboutComponents from "./components/AboutComponents";
import PublicationComponents from "./components/PublicationComponent"
import publicationdata from "./assets/constants";
import NavBarComponents from "./components/NavBarComponent";

function App() {
  
  return (
    <>
      <NavBarComponents/>
      <HeroComponent/>
      <AboutComponents/>
      <PublicationComponents publicationdata = {publicationdata}/>
    </>
  );
}

export default App;
