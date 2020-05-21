import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AboutMe = ({
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
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {nav === 'about' && load && (
                    <div
                        key="unique24873"
                        onClick={() => setLoad(false)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, .5)',
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, .7)',
                            borderWidth: 3,
                            borderStyle: 'solid',
                            position: 'absolute',
                            left: x + 100 + 7,
                            top: '15%',
                            height: '70%',
                            width: '35%',
                            borderRadius: 30,
                            padding: 20,
                        }}
                    >
                        Cum enim magna parturient ac elementum, tincidunt tempor
                        ac lectus platea placerat. Eros dis lectus. Ut aliquam.
                        Porttitor risus mattis mauris lacus a, aliquam augue
                        cras elementum! Adipiscing, vel ridiculus diam
                        pellentesque sociis habitasse pellentesque, augue
                        parturient sed elementum aenean. Tincidunt tristique.
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
                            width: 100,
                        }}

                    ></div>
                )}
            </ReactCSSTransitionGroup>
        </div >
    );
};

export default AboutMe;
