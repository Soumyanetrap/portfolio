import React from 'react';
import contactConfig from '../../assets/configs/contactConfig';
import './Contact.css';

const Contact = () => {
    const handleClick = (contact) => {
        const { type, value } = contact;
        if (type === "Phone" || type === "Email") {
            navigator.clipboard.writeText(value.replace('tel:', ''));
            alert("Copied to Clipboard!");
        } else {
            window.open(`https://${value}`, '_blank');
        }
    };

    return (
        <section id="contact" className="contact">
            <h1>Contact Information</h1>
            <div className="contact-container">
                {contactConfig.map((contact) => (
                    <div
                        key={contact.id}
                        className="contact-item"
                        onClick={() => handleClick(contact)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="contact-icon">{contact.icon}</div>
                        <div className="contact-details">
                            <h2>{contact.type}</h2>
                            <p>{contact.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact;