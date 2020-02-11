import React from 'react';

const Testimonials = ({ data }) => (
    <section id="testimonials">
        {data && (
            <div className="text-container">
                <div className="row">
                    <div className="two columns header-col">
                        <h1>
                            <span>Professional References</span>
                        </h1>
                    </div>

                    <div className="ten columns flex-container">
                        <ul className="slides">
                            {data.testimonials.map(testimonials => (
                                <li key={testimonials.user}>
                                    <blockquote>
                                        <p>{testimonials.text}</p>
                                        <cite>{testimonials.user}</cite>
                                    </blockquote>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </section>
);

export default Testimonials;
