import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Line } from 'react-lineto';

const ResumeMe = ({
    x,
    y,
    setLoad,
    load,
    dimensions,
    updateCoordinates,
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
            {nav === 'resume' && load && (
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, .7)',
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
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1>
                                <span>Education</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    {data.education.map(education => (
                                        <div key={education.school}>
                                            <h3>{education.school}</h3>
                                            <p className="info">
                                                {education.degree}
                                            </p>
                                            <p>{education.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row work">
                        <div className="three columns header-col">
                            <h1>
                                <span>Work</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            {data.work.map(work => (
                                <div key={work.company}>
                                    <h3>{work.company}</h3>
                                    <p className="info">
                                        {work.title}
                                        <span>&bull;</span>{' '}
                                        <em className="date">{work.years}</em>
                                    </p>
                                    <p>{work.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1>
                                <span>Skills</span>
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <h4>{data.skillmessage}</h4>
                        </div>
                    </div>
                </div>
            )
            }

        </ReactCSSTransitionGroup >
    );
};

export default ResumeMe;
