import React from 'react';

const Portfolio = ({ data }) => (
    <section id="portfolio">
        {data && (
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Some of my personal past coding projects.</h1>
                    <div
                        id="portfolio-wrapper"
                        className="bgrid-quarters s-bgrid-thirds cf"
                    >
                        {data.projects.map(projects => (
                            <div
                                key={projects.title}
                                className="columns portfolio-item"
                            >
                                <div className="item-wrap">
                                    <a
                                        href={projects.url}
                                        title={projects.title}
                                    >
                                        <img
                                            alt={projects.title}
                                            src={
                                                'images/portfolio/' +
                                                projects.image
                                            }
                                        />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>{projects.title}</h5>
                                                <p>{projects.category}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </section>
);

export default Portfolio;
