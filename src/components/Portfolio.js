import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Portfolio = ({
    setLoad,
    load,
    nav,
    data,
}) => {

    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
        >
            {nav === 'works' && load && (
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, .0)',
                        borderWidth: 3,
                        borderStyle: 'solid',
                        position: 'absolute',
                        left: '15%',
                        top: '10%',
                        height: '90%',
                        width: '70%',
                        borderRadius: 30,
                        padding: 20,
                        overflowX: 'hidden'
                    }}
                >
                    <ReactCSSTransitionGroup
                        transitionName="spicy"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <div className="row">
                            <div className="twelve columns collapsed">
                                <h2 style={{ color: 'white', textAlign: 'center' }}>Personal Projects</h2>
                                <br />
                                <br />
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
                                                    target="_blank"
                                                    rel="noopener noreferrer"
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
                                                            <hr />
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
                    </ReactCSSTransitionGroup>
                </div>
            )
            }

        </ReactCSSTransitionGroup >
    );
};

export default Portfolio;
