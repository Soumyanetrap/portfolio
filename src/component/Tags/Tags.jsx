import React from 'react';
import "./Tags.css"
const Tags = ({ tags }) => {
    if (!tags || tags.length === 0) return null; // Early return if no tags are provided

    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    );
};

export default Tags;
