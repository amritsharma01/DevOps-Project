import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
                Have questions or want to collaborate? Feel free to reach out to us!
            </p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" className="form-textarea" required></textarea>
                </div>
                <button type="submit" className="form-button">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
