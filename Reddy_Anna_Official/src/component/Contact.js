import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contacts`,
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set content type to JSON
          },
        }
      );
      console.log("API Response:", response.data);
      alert("Form submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact_heading">Contact Us</h1>
        <p className="contact_para">
          If you have any inquiries, feedback, or require assistance, our
          dedicated support team is here to help. Your satisfaction is our
          priority, and we value your engagement with our platform.
        </p>

        {/* ... (rest of your contact page content) ... */}

        <div className="form-container">
          <h2 className="form_heading">Feel free to contact</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <center>
              <button className="submit_btn" type="submit">
                Apply Now
              </button>
            </center>
          </form>
        </div>
        <div className="contact-section">
          <button className="contact-btn">Opne Your Account</button>
          <button className="contact-btn">Contact Us Now</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
