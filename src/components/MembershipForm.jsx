
import React, { useState } from "react";
import axios from "axios";
import logo from "../images/logo_final.png";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherName: "",
    dob: "",
    age: "",
    gender: "",
    occupation: "",
    address: "",
    mobile: "",
    email: "",
    aadhaar: "",
    membershipType: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.declaration) {
      alert("Please accept the declaration.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/membership/create",
        formData
      );

      if (data.success) {
        alert(data.message);

        setFormData({
          applicantName: "",
          fatherName: "",
          dob: "",
          age: "",
          gender: "",
          occupation: "",
          address: "",
          mobile: "",
          email: "",
          aadhaar: "",
          membershipType: "",
          declaration: false,
        });
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Membership Application Submission Failed"
      );
    }
  };

  return (
    <div className="container py-5">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "900px", margin: "auto" }}
      >
        <div className="header">
          <img src={logo} alt="logo" className="logoform" />

          <div className="header-content">
            <h1>HOPE & HUMANITY TRUST</h1>
            <h4>Govt. Reg. No. IV-190101151/2025</h4>
            <p>(A Public Charitable Trust)</p>
          </div>
        </div>

        <h2 className="form-title">APPLICATION FOR MEMBERSHIP</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name of Applicant</label>
            <input
              type="text"
              className="form-control"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Father's / Husband's Name</label>
            <input
              type="text"
              className="form-control"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Gender</label>
            <div>
              <label className="me-3">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>

              <label className="me-3">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />{" "}
                Other
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label>Occupation</label>
            <input
              type="text"
              className="form-control"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Full Address</label>
            <textarea
              className="form-control"
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Mobile No.</label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label>Aadhaar No. (Optional)</label>
            <input
              type="text"
              className="form-control"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
            />
          </div>

          <h5 className="mb-3">TYPE OF MEMBERSHIP</h5>

          <div className="mb-4">
            <label className="me-4">
              <input
                type="radio"
                name="membershipType"
                value="General Member"
                checked={
                  formData.membershipType === "General Member"
                }
                onChange={handleChange}
              />{" "}
              General Member
            </label>

            <label className="me-4">
              <input
                type="radio"
                name="membershipType"
                value="Life Member"
                checked={
                  formData.membershipType === "Life Member"
                }
                onChange={handleChange}
              />{" "}
              Life Member
            </label>

            <label>
              <input
                type="radio"
                name="membershipType"
                value="Volunteer Member"
                checked={
                  formData.membershipType === "Volunteer Member"
                }
                onChange={handleChange}
              />{" "}
              Volunteer Member
            </label>
          </div>

          <h5>DECLARATION</h5>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              id="declaration"
            />

            <label
              className="form-check-label"
              htmlFor="declaration"
            >
              I hereby declare that the information furnished above is
              true and correct. I agree to abide by the rules and
              regulations of HOPE & HUMANITY TRUST.
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success px-5 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
