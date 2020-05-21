import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Sparkle from 'react-sparkle';

const Home = ({
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
        <div>
            <ReactCSSTransitionGroup
                transitionName="spicy"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {nav === 'home' && load && (
                    <div
                        id="about"
                        key="unique24878"
                        onClick={() => setLoad(false)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, .75)',
                            color: 'white',
                            position: 'absolute',
                            left: '15%',
                            top: '15%',
                            height: '80%',
                            width: '70%',
                            borderRadius: 30,
                            padding: 20,
                            textAlign: 'center',
                        }}
                    >
                        <h1>Christoper Carson</h1>
                        <h2 className="shimmer">{data.occupation}</h2>
                        <h3>{data.description}</h3>

                        <h4>Security Clearance Level: Secret</h4>
                    </div>
                )}
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default Home;
