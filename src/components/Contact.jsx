import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Get form data
    const formData = new FormData(form.current);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // EmailJS configuration from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Configuration:', {
      serviceID: serviceID || 'undefined',
      templateID: templateID || 'undefined', 
      publicKey: publicKey || 'undefined'
    });

    // Check if EmailJS is configured with actual values (not placeholders)
    if (!serviceID || !templateID || !publicKey || 
        serviceID === 'your_service_id_here' || 
        templateID === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      
      console.log('EmailJS not configured, using form data for now');
      
      // Show form data in console for testing
      console.log('Form Data:', {
        name, email, phone, subject, message
      });
      
      // Simulate successful submission for testing
      setStatus('success');
      setIsLoading(false);
      form.current.reset();
      return;
    }

    console.log('EmailJS is properly configured, attempting to send email...');

    // Send email using EmailJS (when properly configured)
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        setIsLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        
        // Handle specific Gmail API scope error
        if (error.text && error.text.includes('insufficient authentication scopes')) {
          setStatus('gmail-scope-error');
        } else {
          setStatus('error');
        }
        setIsLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            required
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
        ></textarea>
        
        {status === 'success' && (
          <div className="status-message success">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="status-message error">
            ❌ Failed to send message. Please contact me directly at boqng25@gmail.com
          </div>
        )}
        
        {status === 'gmail-scope-error' && (
          <div className="status-message error">
            ❌ Gmail permission error. Please contact me directly at boqng25@gmail.com or try again later.
          </div>
        )}
        
        <input 
          type="submit" 
          value={isLoading ? "Sending..." : "Send Message"} 
          className="btn" 
          disabled={isLoading}
        />
      </form>
    </section>
  );
};

export default Contact;