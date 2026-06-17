import React, { useState } from "react";
import "../Css/bemember.css";

const Bemember = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    membershipType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Membership Form Submitted Successfully");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      occupation: "",
      membershipType: "",
      message: "",
    });
  };

  return (
    <div className="member-container">
      <div className="member-card">
        <div className="member-header">
          <h1>Become a Member</h1>
          <p>
            Join our charitable trust and help us support people and create a
            better future together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="member-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Occupation</label>
            <input
              type="text"
              name="occupation"
              placeholder="Enter your occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea
              name="address"
              rows="3"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          

          <div className="form-group full-width">
            <label>Why do you want to join?</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
        </form>
        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="submit-btn w-50">
            Submit Application
          </button>
          </div>
      </div>
    </div>
  );
};

export default Bemember;