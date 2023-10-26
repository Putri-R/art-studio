import React, { useState, useEffect } from 'react';
import db from '../../configs/firebase_config';
import { collection, getDocs } from 'firebase/firestore';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimoni.css';

const TestimoniComponent = () => {
    const [testimonies, setTestimonies] = useState([]);

    useEffect(() => {
        const fetchTestimonies = async () => {
            const collectionRef = collection(db, 'testimoni');
        const querySnapshot = await getDocs(collectionRef);

        const testimoniesArray = [];
        querySnapshot.forEach((doc) => {
            testimoniesArray.push(doc.data());
        });

        setTestimonies(testimoniesArray);
        };

        fetchTestimonies();
    }, []);

    const testimonialsGroups = [];
    for (let i = 0; i < testimonies.length; i += 2) {
        const group = testimonies.slice(i, i + 2);
        testimonialsGroups.push(group);
    }

    return (
        <div className="testimony">
            <div className="testimony-group">
                <p>Testimonials</p>
                <h2>What students say about <span>Us</span> ?</h2>
            </div>
        
            <Carousel interval={null}>
                {testimonialsGroups.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                    <div className="d-flex justify-content-between">
                        <div className="testimony-item">
                            <h3>{group[0].Name}</h3>
                            <p>{group[0].Course}</p>
                            <h6>{group[0].Testimoni}</h6>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-between">
                    {group.length > 1 && (
                        <div className="testimony-item">
                            <h3>{group[1].Name}</h3>
                            <p>{group[1].Course}</p>
                            <h6>{group[1].Testimoni}</h6>
                        </div>
                    )}
                    </div>
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );  
};

export default TestimoniComponent;