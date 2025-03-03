import React, { useState, useEffect } from "react";
import { add_cards, get_cards, remove_cards } from "../http/api";
import "../AdminPannel/CardForm.css";

const CardForm = ({ selectedCard, clearSelection }) => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    buttonText: "Play Now",
    imageFile: null,
  });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await get_cards();
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    if (selectedCard) {
      setFormData({
        title: selectedCard.title,
        description: selectedCard.description,
        buttonText: selectedCard.buttonText,
        imageFile: null,
      });
    }
  }, [selectedCard]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imageFile: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("card", formData.imageFile);
    try {
      await add_cards(formDataToSend);
      setFormData({
        title: "",
        description: "",
        imageFile: null,
      });
      fetchCards();
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await remove_cards(id);
      fetchCards();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="card-form">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />{" "}
        {/* Make image input required */}
        <button type="submit">Add Card</button>
      </form>

      <div className="card-list">
        {cards.map((card) => (
          <div key={card._id} className="custom-card">
            {" "}
            {/* Use _id for the key */}
            <img
              src={`${process.env.REACT_APP_BASE_URL}/card/${card.imageUrl}`}
              alt={card.title}
              className="card-img"
            />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => handleDelete(card._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardForm;
