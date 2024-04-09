import React from "react";
import "../styles/AboutComponenetStyles.css";
import resumepdf from "../assets/pdf/resume.pdf";
function AboutComponents() {
  return (
    <>
      <section className="about">
        <div className="pun-container">
          <div className="hero-pun">
            <p>who is yasu ?</p>
            <h1>
              a <span className="rainbow">vibrant </span>educator with boundless{" "}
              <span className="energy">energy</span> and a contagious enthusiasm
              for teaching
            </h1>
          </div>
          <div className="pun-explanation">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, dolores modi eligendi ipsa ea quaerat beatae vitae
              repellat! Architecto asperiores totam laudantium illo voluptatem
              facilis optio minima alias aperiam ea obcaecati iste incidunt ut
              ad, excepturi reiciendis iusto eligendi eos magnam error ex eaque.
              Maiores ipsum numquam ex veritatis a!
            </p>
            <a href={resumepdf} target="_blank">
              resumé
            </a>
          </div>
        </div>
        
      </section>
      
    </>
  );
}

export default AboutComponents;
