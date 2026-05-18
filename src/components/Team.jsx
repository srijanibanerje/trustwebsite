import React from "react";
import "../Css/team.css";

const Team = () => {
  const members = [
    {
      name: "Anirban Sen",
      role: "Founder & Trustee",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Srijani Banerjee",
      role: "Managing Trustee",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Das",
      role: "Volunteer Coordinator",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Social Worker",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>

      <div className="team-container">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;