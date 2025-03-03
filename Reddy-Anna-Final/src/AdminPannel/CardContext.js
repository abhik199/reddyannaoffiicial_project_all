import React, { createContext, useContext, useEffect, useState } from "react";
import { get_cards, add_cards, remove_cards } from "../http/api"; // Import your API functions

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await get_cards(); // Use your API function
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const addCard = async (card) => {
    try {
      const response = await add_cards(card); // Use your API function
      setCards([...cards, response.data]); // Assuming your API returns the newly added card
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const deleteCard = async (id) => {
    try {
      await remove_cards(id); // Use your API function
      setCards(cards.filter((card) => card._id !== id)); // Use _id if that's your ID field
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <CardContext.Provider value={{ cards, addCard, deleteCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCards = () => useContext(CardContext);
