import React, { useState } from "react";
import { useCards } from "../AdminPannel/CardContext";
import "../Styles/UpcomingEvent.css";
// import CardForm from "../AdminPannel/CardForm";

const UpcomingEvent = () => {
  const { cards } = useCards();

  return (
    <div className="container">
      <div className="user-dashboard">
        <div className="card-container">
          {cards.map((card) => (
            <div key={card.id} className="custom-card">
              <div className="card-image">
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/card/${card.imageUrl}`}
                  alt={card.title}
                  className="card-img"
                />
              </div>
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
                {/* <button className="card-button">{card.buttonText}</button> */}
                <button className="card-button">
                  <a href="https://wa.me/447878632078">Play Now</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
