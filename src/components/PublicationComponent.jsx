import React from "react";
import "../styles/publicationComponentStyles.css";
// import publicationdata from "../assets/constants/index";
function PublicationComponents({ publicationdata }) {
  return (
    <>
      <section className="publication">
        <h1>Publications</h1>
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
          <p> <strong>Journal Name : </strong> {cardData.journal}</p>
          <p> <strong>Date : </strong> {cardData.date_of_publication}</p>
          <p> <strong>Volume/Issue :</strong>{cardData.volume_issue}</p>
          <p> <strong>Impact Factor : </strong>{cardData.impact_factor}</p>
          <p> <strong>ISSN :</strong> {cardData.ISSN}</p>
          <p> <strong>Page Numbers : </strong>{cardData.page_numbers}</p>
        </div>
      </div>
    </>
  );
}

export default PublicationComponents;
