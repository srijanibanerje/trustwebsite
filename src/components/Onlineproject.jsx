import React from "react";
import "../Css/onlineproject.css";

import project1 from "../images/p1.jpeg";
import project2 from "../images/pj2.jpeg";
import project3 from "../images/pj6.jpeg";
import project4 from "../images/pj5.jpeg";


const Onlineproject = () => {
  const projects = [
    {
      id: 1,
      title: "Education for All",
      image: project1,
      desc: "Providing free online education and digital learning resources to underprivileged children.",
    },
    {
      id: 2,
      title: "Food Donation Drive",
      image: project2,
      desc: "Distributing essential food supplies to families in need across rural areas.",
    },
    {
      id: 3,
      title: "Women Empowerment",
      
      image: project3,
      desc: "Skill development programs and online workshops for women to build independent career.",
    },
    {
      id: 4,
      title: "Healthcare Support",
      image: project4,
      desc: "Online medical consultation and financial help for critical patients.",
    },
    // {
    //   id: 5,
    //   title: "Child Welfare Program",
    //   image: project5,
    //   desc: "Supporting orphaned and needy children with education and shelter.",
    // },
  ];
  
  
  return (
    <div className="project-section" style={{backgroundColor:"#f9f9f9"}}>
      <h2 className="project-heading">Hope in Action</h2>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              {/* <button className="project-btn">Learn More</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onlineproject;