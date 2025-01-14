import React from 'react';
import contactConfig from '../assets/configs/contactConfig';
import './Footer.css';

const Footer = () => {
    const socialLinks = contactConfig.filter(contact => contact.type === "LinkedIn" || contact.type === "GitHub");

    return (
        <footer>
            <div className='footer'>
                <div className='social-links'>
                    {socialLinks.map((contact) => (
                        <a key={contact.id} href={contact.value} target="_blank" rel="noopener noreferrer" className="social-link">
                            {contact.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;