import React, { useState } from "react";
import axios from "axios";
import "../Css/donateform.css";
import logo from "../images/logo_final.png";
import qr from "../images/qr.png";

const Donateform = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    fatherName: "",
    address: "",
    mobile: "",
    email: "",
    pan: "",
    amount: "",
    amountWords: "",
    paymentMode: "",
    transactionId: "",
    donationDate: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitDonation = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/donation/create",
        formData
      );

      alert("Donation form submitted successfully");
      console.log(response.data);

      setFormData({
        donorName: "",
        fatherName: "",
        address: "",
        mobile: "",
        email: "",
        pan: "",
        amount: "",
        amountWords: "",
        paymentMode: "",
        transactionId: "",
        donationDate: "",
        purpose: "",
      });
    } catch (error) {
      console.log(error);
      alert("Submission Failed");
    }
  };

  return (
    <div className="donation-container">
      <form onSubmit={submitDonation}>
        <div className="header">
          <img src={logo} alt="logo" className="logoform" />

          <div className="header-content">
            <h1>HOPE & HUMANITY TRUST</h1>
            <h4>Govt. Reg. No. IV-190101151/2025</h4>
            <p>(A Public Charitable Trust)</p>
          </div>
        </div>

        <h2 className="form-title">DONATION FORM</h2>

        <div className="form-body">
          <div className="left-section">
            <div className="form-group">
              <label>Name of Donor</label>
              <input
                type="text"
                name="donorName"
                value={formData.donorName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Father's / Husband's Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Full Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Mobile No.</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>PAN No.</label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
              />
            </div>

            <h3>Donation Details</h3>

            <div className="form-group">
              <label>Donation Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Amount In Words</label>
              <input
                type="text"
                name="amountWords"
                value={formData.amountWords}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Payment Mode</label>
              <select
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="UPI">UPI</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Transaction ID</label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date of Donation</label>
              <input
                type="date"
                name="donationDate"
                value={formData.donationDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Purpose</label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              >
                <option value="">Select Purpose</option>
                <option value="Education">Education</option>
                <option value="Child Welfare">Child Welfare</option>
                <option value="Health">Health</option>
                <option value="General Fund">General Fund</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
           <div className="text-center mt-4">
  <button type="submit" className="btn btn-success px-5 py-2">
    Submit Donation
  </button>
</div>
          </div>

          <div className="qr-section">
            <h4>SCAN & PAY</h4>
            <img src={qr} alt="QR Code" className="qr-image" />

            {/* <p>
              <strong>UPI:</strong>
              <br />
              hopeandhumanitytrusrserampore@sbi
            </p> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Donateform;