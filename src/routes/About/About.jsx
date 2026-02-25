import React from "react";
import "./About.scss";
import image1 from "../../assets/1769227214170.png";
import image2 from "../../assets/sara.jpg";
function About() {
  const teamMembers = [
    {
      name: "Tareq Mohamed",
      role: "Founder & CEO",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Sarah Ali",
      role: "Lead Designer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "Shady Mohamed",
      role: "Backend Developer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ];

  return (
    <div className="aboutPage">
      <div className="hero">
        <h1>About TareqEstate</h1>
        <p>
          Welcome to TareqEstate! We connect you with the best real estate
          listings in Egypt, whether you're looking to buy, rent, or invest.
        </p>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a seamless property experience for buyers,
          sellers, and renters by using technology, transparency, and trust.
        </p>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="members">
          {teamMembers.map((member) => (
            <div className="member" key={member.name}>
              <img
                src={
                  member.name === "Tareq Mohamed"
                    ? image1
                    : member.name === "Sarah Ali"
                      ? image2
                      : member.img
                }
                alt={member.name}
              />

              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="vision">
        <h2>Our Vision</h2>
        <p>
          To be the leading platform for real estate in Egypt, making property
          discovery simple, transparent, and reliable for everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
