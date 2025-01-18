import React, { useState } from 'react';
import { db } from '../../credentials/firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods
import './Feedback.css';

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        org: '',
        message: '',
        linkedin: '',
        twitter: '',
        quality: 0,
        communication: 0,
        delivery: 0,
    });

    // Track hover state separately for each rating
    const [hoveredRating, setHoveredRating] = useState({
        quality: null,
        communication: null,
        delivery: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRatingChange = (e, type) => {
        const value = parseInt(e.target.value);
        setFormData({
            ...formData,
            [type]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to send to Firestore
        const dataToSubmit = {
            id: Date.now(),
            name: formData.name,
            title: formData.title,
            org: formData.org,
            message: formData.message,
            socialMedia: {
                linkedin: formData.linkedin,
                twitter: formData.twitter,
            },
            ratings: {
                quality: formData.quality,
                communication: formData.communication,
                delivery: formData.delivery,
            },
        };

        // Save the data to Firestore
        try {
            await saveToFirestore(dataToSubmit);
            alert('Document successfully written!');

            // Clear the form fields after successful submission
            setFormData({
                name: '',
                title: '',
                org: '',
                message: '',
                linkedin: '',
                twitter: '',
                quality: 0,
                communication: 0,
                delivery: 0,
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    const saveToFirestore = async (data) => {
        // Save the form data to Firestore
        await addDoc(collection(db, 'profiles'), data);
    };

    const renderStars = (rating, type) => {
        const currentRating = hoveredRating[type] !== null ? hoveredRating[type] : rating;
        return [...Array(5)].map((_, index) => {
            
            const starClass = index < currentRating ? 'star golden' : 'star';
            return (
                <span
                    key={index}
                    className={starClass}
                    onClick={() => handleRatingChange({ target: { value: index + 1 } }, type)}
                    
                    onMouseEnter={() => setHoveredRating((prev) => ({ ...prev, [type]: index + 1 }))} // Set hovered rating
                    onMouseLeave={() => setHoveredRating((prev) => ({ ...prev, [type]: null }))} // Reset hovered rating
                >
                    &#9733;
                </span>
            );
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type="text" name="name" value={formData.name} onChange={handleChange} required /></td>
                        </tr>

                        <tr>
                            <td><label>Title:</label></td>
                            <td><input type="text" name="title" value={formData.title} onChange={handleChange} required /></td>
                        </tr>

                        <tr>
                            <td><label>Organization:</label></td>
                            <td><input type="text" name="org" value={formData.org} onChange={handleChange} required /></td>
                        </tr>

                        <tr>
                            <td><label>Message:</label></td>
                            <td><textarea name="message" value={formData.message} onChange={handleChange} required /></td>
                        </tr>

                        <tr>
                            <td><label>LinkedIn:</label></td>
                            <td><input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} /></td>
                        </tr>

                        <tr>
                            <td><label>Twitter:</label></td>
                            <td><input type="url" name="twitter" value={formData.twitter} onChange={handleChange} /></td>
                        </tr>

                        <tr>
                            <td><label>Ratings:</label></td>
                            <td>
                                <div>
                                    <label>Quality:</label>
                                    <div>{renderStars(formData.quality, 'quality')}</div>
                                </div>
                                <div>
                                    <label>Communication:</label>
                                    <div>{renderStars(formData.communication, 'communication')}</div>
                                </div>
                                <div>
                                    <label>Delivery:</label>
                                    <div>{renderStars(formData.delivery, 'delivery')}</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProfileForm;
