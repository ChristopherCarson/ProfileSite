import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Entity } from 'resium';
import { Cartesian3, Color } from 'cesium';

const References = ({
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
                {nav === 'references' && (
                    <>
                        <Entity
                            position={Cartesian3.fromDegrees(-120, 38)}
                            point={{ pixelSize: 15, color: Color.BLUE }}
                        ></Entity>
                        <Entity
                            position={Cartesian3.fromDegrees(-117, 32)}
                            point={{ pixelSize: 15, color: Color.WHITE }}
                        ></Entity>
                    </>
                )}
                {nav === 'references' && load && (
                    <div
                        onClick={() => setLoad(false)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, .5)',
                            color: 'white',
                            borderColor: 'rgba(0, 0, 255, .7)',
                            borderWidth: 3,
                            borderStyle: 'solid',
                            position: 'absolute',
                            left: '10%',
                            top: '15%',
                            //height: '70%',
                            width: '35%',
                            borderRadius: 30,
                            padding: 20,
                        }}
                    >
                        <blockquote>
                            <p>{data.testimonials[1].text}</p>
                            <cite>{data.testimonials[1].user}</cite>
                        </blockquote>
                    </div>
                )}
                {nav === 'references' && load && (
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
                            right: '10%',
                            top: '35%',
                            //height: '70%',
                            width: '35%',
                            borderRadius: 30,
                            padding: 20,
                        }}
                    >
                        <blockquote>
                            <p>{data.testimonials[0].text}</p>
                            <cite>{data.testimonials[0].user}</cite>
                        </blockquote>
                    </div>
                )}
            </ReactCSSTransitionGroup>
        </div >
    );
};

export default References;
