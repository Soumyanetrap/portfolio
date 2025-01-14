import React, { useState } from 'react';
import Tags from '../Tags/Tags';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { id, title, description, full_desc, image, links, tags } = project;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCardClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleLinkClick = (event) => {
        // Prevent event from propagating to the parent div
        event.stopPropagation();
    };

    return (
        <>
            <div key={id} className="project-card" onClick={handleCardClick}>
                <img src={image} alt={title} className="project-image" />
                <div className="project-content">
                    <div className="project-title">{title}</div>
                    <div className="project-description">{description}</div>
                    <hr className="divider" />
                    <div className="project-links">
                        {links.map((link, index) => {
                            const { url, icon } = link || {};
                            return (
                                <a 
                                    key={index} 
                                    href={url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="project-link"
                                    onClick={handleLinkClick} // Stop propagation
                                >
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-button" onClick={handleClosePopup}>×</button>
                        <h2>{title}</h2>
                        <p>{full_desc.intro}</p>
                        <p>{full_desc.details}</p>
                        {<Tags tags={tags} />}
                        <hr className="divider" />
                        <div className="project-links">
                            {links.map((link, index) => {
                                const { url, icon } = link || {};
                                return (
                                    <a 
                                        key={index} 
                                        href={url} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="project-link"
                                        onClick={handleLinkClick} // Stop propagation
                                    >
                                        {icon}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
