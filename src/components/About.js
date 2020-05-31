import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const About = ({
    x,
    y,
    setLoad,
    load,
    nav,
    data,
}) => {
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {nav === 'about' && load && (
                    <div id="about"
                        onClick={() => setLoad(false)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, .5)',
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, .7)',
                            borderWidth: 3,
                            borderStyle: 'solid',
                            position: 'absolute',
                            left: window.innerWidth < 700 ? x + 20 + 7 : x + 100 + 7,
                            top: '15%',
                            width: window.innerWidth < 700 ? '50%' : '35%',
                            borderRadius: 30,
                            padding: 20,
                            fontSize: 10
                        }}
                    >
                        <p>{data.bio}</p>
                        <div className="row">

                            <p className="address">
                                <span>{data.name}</span>
                                <br />
                                <span>
                                    {data.address.street}
                                    <br />
                                    {data.address.city} {data.address.state},{' '}
                                    {data.address.zip}
                                </span>
                                <br />
                                <span>{data.phone}</span>
                                <br />
                                <span>{data.email}</span>
                            </p>



                            <a
                                href={data.resumedownload}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button"
                            >
                                <i className="fa fa-download"></i>
                                <div style={{ width: '10px', display: 'inline-block' }} />Download Resume
                                </a>


                        </div>
                    </div>
                )}
                {nav === 'about' && load && (
                    <div
                        style={{
                            borderColor: 'rgba(255, 255, 255, .7)',
                            opacity: 0.5,
                            borderWidth: 3,
                            borderStyle: 'solid',
                            position: 'absolute',
                            left: x + 7,
                            top: y - 3,
                            width: window.innerWidth < 700 ? 20 : 100,
                        }}

                    ></div>
                )}
            </ReactCSSTransitionGroup>
        </div >
    );
};

export default About;
