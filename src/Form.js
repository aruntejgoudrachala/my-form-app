import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage(''); // Clear success message if there's an error
      return;
    }

    // Clear error message if inputs are valid
    setErrorMessage('');

    // Simulate successful form submission
    setSuccessMessage('Form submitted successfully!');

    // Clear form inputs
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display error message if any */}
      {errorMessage && <p className="error">{errorMessage}</p>}
      {/* Display success message if form is successfully submitted */}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Form;
