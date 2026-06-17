import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.declaration) {
      alert("Please accept the declaration.");
      return;
    }

    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="container py-5">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "900px", margin: "auto" }}
      >
      
        <h2 className="text-center fw-bold" style={{ color: "#007bff" }}>
          HOPE & HUMANITY TRUST
        </h2>

        <p className="text-center mb-4">
          <strong>APPLICATION FOR MEMBERSHIP</strong>
        </p>

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
                  onChange={handleChange}
                />{" "}
                Male
              </label>

              <label className="me-3">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />{" "}
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
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
                onChange={handleChange}
              />{" "}
              General Member
            </label>

            <label className="me-4">
              <input
                type="radio"
                name="membershipType"
                value="Life Member"
                onChange={handleChange}
              />{" "}
              Life Member
            </label>

            <label>
              <input
                type="radio"
                name="membershipType"
                value="Volunteer Member"
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
            <button type="submit" className="btn btn-primary px-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;