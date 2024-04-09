import React from "react";
import "../styles/publicationComponentStyles.css";
// import publicationdata from "../assets/constants/index";
function PublicationComponents({ publicationdata }) {
  return (
    <>
      <section className="publication">
        <h1>Publicatons</h1>
        <div className="card-holder">
          {publicationdata.map((cardData, index) => (
            <Card key={index} cardData={cardData} />
          ))}
        </div>
      </section>
    </>
  );
}

function Card({ cardData }) {
  return (
    <>
      <div className="card">
        <div className="card-data">
          <p> Name : {cardData.name}</p>
          <p> Journal Name : {cardData.journal}</p>
          <p> Date : {cardData.date_of_publication}</p>
          <p> Volume/Issue : {cardData.volume_issue}</p>
          <p> Impact Factor : {cardData.impact_factor}</p>
          <p> ISSN : {cardData.ISSN}</p>
          <p> Page Numbers : {cardData.page_numbers}</p>
        </div>
      </div>
    </>
  );
}

export default PublicationComponents;
