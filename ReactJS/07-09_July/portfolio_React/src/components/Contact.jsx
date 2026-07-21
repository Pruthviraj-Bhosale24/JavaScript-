// src/components/Contact/Contact.jsx

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;