import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const isFormComplete =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.message;

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="firstName">*First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="lastName">*Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">*Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">*Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        {!isFormComplete && <p className="form-prompt">* Required Fields</p>}

        <button
          type="submit"
          className="submit-button"
          disabled={!isFormComplete}
        >
          Submit
        </button>
      </form>

      {formSubmitted && (
        <div className="popup-message">
          <p>Your message has been sent!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
