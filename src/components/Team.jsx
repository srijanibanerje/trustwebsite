import React from "react";
import "../Css/team.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import deba from "../images/deba.jpeg";
import ranjan from "../images/ranjan.jpeg";
import Bhuban from "../images/bhuban.jpeg";
import Sanjiv from "../images/sanjiv.jpeg";
import Anima from "../images/anima.jpeg";
import sukomal from "../images/sukumol.jpeg";
import deb from "../images/deb.jpeg";
import debraj from "../images/debraj.jpeg";
import paria from "../images/paria.jpeg";

const Team = () => {
  const members = [
    
    {
      name: "Mr Bhuban Pramanick",
      role: "Chairman",
      details:"Home and Humanity Trust, Serampore Chaired by Mr. Bhuban Pramanick, a two-time sitting MLA from the Balagarh constituency, the Trust is dedicated to community welfare and social upliftment. Known for his grassroots social work, Mr. Pramanick remains available 24/7 to support those in need. Under his leadership, the Trust actively engages in initiatives such as education support, healthcare access, and assistance for underprivileged families and children across Serampore.",
      img: [Bhuban],
    },
     {
                name: "Mr. Pravanjan Paria",
                role: "Vice Chairman",
                details: "Army veteran with 32+ years of service. Mr. Paria brings extensive experience in administration, welfare, and stakeholder relations to the Trust. He is a caring, open-minded leader known for solving problems with dedication and empathy.",
                img: [paria],
            },
    {
      name: "Mr Sanjiv Ghosh",
      role: "Secretary",
      details: "Mr. Sanjib Ghosh is an Army veteran and currently serves as Secretary of the Trust. A Kargil war veteran, he carries himself with a commanding presence and a bold, resolute attitude. Beyond his military service, he is deeply engaged in social work and remains committed to supporting those in need.",
      img: [Sanjiv],
    },
    {
      name: "Mr Debabrata Mondal",
      role: "Asst Secretary",
      details: "Mr. Debabrata Mondal brings a cool, composed presence and a clinical, problem-solving mindset to every challenge. As Assistant Secretary of the Trust, he fulfills his responsibilities with precision. A dedicated social worker, he is known for treating everyone with equal respect, regardless of status. His conduct has earned him wide admiration among distinguished circles.",
      img: [deb],
    },
    {
      name: "Debabrata Banerjee",
      role: "Member & Office Manager",
      details: "Debabrata Banerjee, also known affectionately as Tinku, is a soft-spoken entrepreneur who serves as Office Administrator of the Trust. Known for his reliability, sense of responsibility, and commitment to social work, he is a kind-hearted individual with a deep love for nature, especially plants. He is also an avid collector of rare coins. Demonstrating his dedication, he has voluntarily offered his premises for the Trust’s use until a new office is established.",
      img: [deba],
    },
     {
      name: "Sukomal Sarkar",
      role: "Trust Treasurer",
      details: "Sukomal Sarkar is a dedicated and experienced professional who successfully served under the Ministry of Tourism, Government of India, and honorably retired after years of committed service. Alongside government responsibilities, he has also worked efficiently through a CSC (Common Service Centre) Point, contributing to digital public services and citizen support initiatives. He is a registered and certified holder under NeGP (National e-Governance Plan), reflecting his expertise in e-governance, public service delivery, and digital empowerment initiatives of the Government of India.",
       img: [sukomal],
    },
    {
      name: "Ranjan Basu",
      role: "Member",
      details: "Ranjan Basu is a businessman known for his strong networking skills and commitment to helping others. Widely respected for supporting people as they build their careers, he also organizes social camps and takes an active role in community initiatives. He currently serves as a Member of the Trust. ",
      img: [ranjan],
    },
    
   
    {
      name: "Mrs Anima Nath",
      role: "Member",
      details: "Anima Nath is a distinguished social worker and human rights activist, widely recognized for her resolute commitment to supporting the underprivileged. A retired teacher by profession, she brings the same dedication to community service. An avid traveler, she is also the sole female member of the Society and currently serves as a Member.",
        img: [Anima],
    },
   
   
    {
        name: "Mr Debraj Jana",
        role: "Member",
        details:"Mr. Debraj Jana — a physiotherapist by profession, but so much more in practice. Debraj is known for his warm presence and kind heart. Though he identifies as an atheist, his actions speak of deep care and compassion. He’s a committed social worker, a natural networker, and someone who works tirelessly for every good cause he believes in. Alongside his role as a Member, Debraj has earned the reputation of being a true jack-of-all-trades — always ready to step in, learn, and contribute wherever he’s needed.",
        img: [debraj],
    }
  ];

  return (
  <section className="team-section">
      <h2 className="team-title">Our Team Members</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="fw-bold">{member.role}</p>
              <p className="details">{member.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;