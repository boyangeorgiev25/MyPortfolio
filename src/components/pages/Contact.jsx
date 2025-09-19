import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // get form data
    let formData = new FormData(form.current);
    let name = formData.get('from_name');
    let email = formData.get('from_email');
    let phone = formData.get('phone');
    let subject = formData.get('subject');
    let message = formData.get('message');

    // emailjs config
    let serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    let templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    let publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS config:', {
      serviceID: serviceID || 'undefined',
      templateID: templateID || 'undefined', 
      publicKey: publicKey || 'undefined'
    });

    // check if email stuff is configured
    if (!serviceID || !templateID || !publicKey || 
        serviceID === 'your_service_id_here' || 
        templateID === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      
      console.log('email not configured, just logging form data');
      
      // Just log it for now
      console.log('Form Data:', {
        name, email, phone, subject, message
      });
      
      // Pretend it worked
      setStatus('success');
      setIsLoading(false);
      form.current.reset();
      return;
    }

    console.log('sending email...');

    // Actually send the email
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        setIsLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        
        // Gmail permission issue
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
      <h2 className="heading">Let's <span>Connect</span></h2>

      <form ref={form} onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your message..."
          required
        ></textarea>
        
        {status === 'success' && (
          <div className="status-message success">
            ✅ Thank you for your message! I'll get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="status-message error">
            ❌ Something went wrong. Please email me directly at boqng25@gmail.com
          </div>
        )}
        
        {status === 'gmail-scope-error' && (
          <div className="status-message error">
            ❌ Email system error. Please contact me directly at boqng25@gmail.com
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