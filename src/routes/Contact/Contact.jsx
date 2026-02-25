import { useState } from "react";
import "./Contact.scss";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    try {
      // await apiRequest.post("/contact", formData);
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      navigate("/");
    } catch (err) {
      setError("Failed to send message. Try again later.", err);
    }
  };

  return (
    <div className="contactPage">
      <h1>Contact Us</h1>
      <p>
        Have questions or inquiries? Fill out the form below and we'll get back
        to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {error && <span className="error">{error}</span>}
        {success && <span className="success">{success}</span>}
        <button type="submit">Send Message</button>
      </form>
      <div className="contactInfo">
        <div>
          <h3>Email</h3>
          <p>support@tareqestate.com</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+20 109 116 4601</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>Maadi, Cairo, Egypt</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
