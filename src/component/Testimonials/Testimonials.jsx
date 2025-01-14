import React, { useState, useEffect } from 'react';
import testimonials from '../../assets/configs/testimonialConfig';
import { db } from '../../credentials/firebase'; // Import Firestore configuration
import { collection, getDocs } from 'firebase/firestore'; // Firestore methods
import { LinkedIn, Twitter } from '@mui/icons-material';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [communicationAvg, setCommunicationAvg] = useState(0);
    const [deliveryAvg, setDeliveryAvg] = useState(0);
    const [qualityAvg, setQualityAvg] = useState(0);

    useEffect(() => {
        // Function to fetch testimonials from Firestore
        const fetchTestimonials = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'profiles')); // Assuming collection is named 'testimonials'
            const testimonialsList = querySnapshot.docs.map(doc => doc.data()); // Map each document to its data
            setTestimonialsData(testimonialsList); // Set the state with fetched data
        } catch (error) {
            console.error('Error fetching testimonials: ', error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
        };

        fetchTestimonials(); // Call the function when the component mounts
    }, []);
    
    useEffect(() => {
        if (!loading) {
            let totalCommunication = 0;
            let totalDelivery = 0;
            let totalQuality = 0;
            let count = 0;

            testimonialsData.forEach(testimonial => {
                totalCommunication += testimonial.ratings.communication || 0;
                totalDelivery += testimonial.ratings.delivery || 0;
                totalQuality += testimonial.ratings.quality || 0;
                count += 1;
            });

            if (count > 0) {
                setCommunicationAvg(totalCommunication / count);
                setDeliveryAvg(totalDelivery / count);
                setQualityAvg(totalQuality / count);
            }
        }
    }, [testimonialsData, loading]);
    
    const generateRandomAvatarUrl = (name) => {
        const randomIndex = Math.floor(Math.random() * testimonials.dp_backgrounds.length);
        const selected = testimonials.dp_backgrounds[randomIndex];
        return `https://avatar.oxro.io/avatar.svg?name=${name.replace(" ", "+")}&background=${selected.background.slice(1)}&color=${selected.color.slice(1)}` // Use default image if none exists
    }

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <div className="stars">
                {Array(fullStars).fill(<span className="full">★</span>)}
                {Array(halfStars).fill(<span className="half">★</span>)}
                {Array(emptyStars).fill(<span className="empty">☆</span>)}
            </div>
        );
    };

  return (
    <div className="testimonials-container">
      {loading ? <p>Loading testimonials...</p> : (
        <>
            {
                testimonials.showRatings &&
                <div className="rating">
                    <h2>How Satisfied Are Our Clients?</h2>

                    <table className="rating-table">
                        <thead>
                        <tr>
                            <th>Type</th>
                            <th>Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Communication</td>
                            <td>{renderStars(communicationAvg)}</td>
                        </tr>
                        <tr>
                            <td>Delivery</td>
                            <td>{renderStars(deliveryAvg)}</td>
                        </tr>
                        <tr>
                            <td>Quality</td>
                            <td>{renderStars(qualityAvg)}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

            }
          <h2>What Our Clients Say?</h2>
                  <div className="testimonials-list">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img
                            src={testimonial.image || generateRandomAvatarUrl(testimonial.name)}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.title} at {testimonial.org}</p>
                  </div>
                </div>
                <p className="testimonial-message">{testimonial.message}</p>
                <hr className="divider" />
                <div className="testimonial-social-media">
                  {testimonial.socialMedia?.linkedin && (
                    <LinkedIn
                      onClick={() => window.open(testimonial.socialMedia.linkedin, "_blank")}
                      className="social-icon"
                    />
                  )}
                  {testimonial.socialMedia?.twitter && (
                    <Twitter
                      onClick={() => window.open(testimonial.socialMedia.twitter, "_blank")}
                      className="social-icon"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonials;
