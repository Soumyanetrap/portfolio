import React from 'react';
import Tags from '../Tags/Tags'; // Import the Tags component
import './Timeline.css'; // Make sure to create this CSS file

const CustomTimeline = (props) => {
    const { items } = props || {};

    return (
        <>
            <div className="about">
                <span>
                    <img className="profile-pic" src={items.about.image} alt="profile" />
                    {items.greeting}
                </span>
                <span>{items.about.start}</span>
                <span>{items.about.exit}</span>
                <section>
                    {items.titles.map((title, index) => (
                        <span key={index}>
                            {title}{index !== items.titles.length - 1 && ','}
                        </span>
                    ))}
                </section>
            </div>
            <div className="timeline">
                {
                    items.workTimeline.map((item, index) => {
                        const { id, date, title, company, description, tags } = item || {};
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={id} className={`timeline-container ${isLeft ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <h3>{title}</h3>
                                    <h4>{company}</h4>
                                    <p>{description}</p>
                                    {<Tags tags={tags} />}
                                </div>
                                <div className="timeline-date">{date}</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default CustomTimeline;