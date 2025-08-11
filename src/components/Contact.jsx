import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Form submitted! (This is just a demo)');
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;