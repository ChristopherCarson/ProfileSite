import { Viewer, Camera, Entity, CameraFlyTo } from 'resium';
import React, { useEffect, useState } from 'react';
import Sparkle from 'react-sparkle';
import { Cartesian3, Cartesian2, Color } from 'cesium';

const Resium = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [load, setLoad] = useState(false);
    const posit = new Cartesian2();
    let viewer;

    const updateCoordinates = () => {
        if (viewer) {
            setCoordinates(
                window.Cesium.SceneTransforms.wgs84ToWindowCoordinates(
                    viewer.cesiumElement.scene,
                    Cartesian3.fromDegrees(-120, 38),
                    posit
                )
            );
        }
    };

    useEffect(() => {
        if (coordinates.x === 0) updateCoordinates();
    });

    return (
        <div id={'home'}>
            <div id={'newCredit'} style={{ display: 'none' }}></div>
            <nav id="nav-wrap">
                <a
                    className="mobile-btn"
                    href="#nav-wrap"
                    title="Show navigation"
                >
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Works
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#testimonials">
                            References
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <Viewer
                ref={e => {
                    viewer = e;
                }}
                animation={false}
                fullscreenButton={false}
                vrButton={false}
                infoBox={false}
                timeline={false}
                navigationInstructionsInitiallyVisible={false}
                navigationHelpButton={false}
                geocoder={false}
                sceneModePicker={false}
                selectionIndicator={false}
                homeButton={false}
                scene3DOnly={false}
                baseLayerPicker={false}
                creditContainer={'newCredit'}
            >
                <Camera
                    onChange={() => updateCoordinates()}
                    onMoveEnd={() => setLoad(true)}
                    percentageChanged={0.001}
                />
                <CameraFlyTo
                    onComplete={console.log(load)}
                    destination={Cartesian3.fromDegrees(-80, 38, 20000000)}
                    duration={5}
                    once={true}
                />
                <Entity
                    name="test2"
                    description="test!!"
                    position={Cartesian3.fromDegrees(-120, 38)}
                    point={{ pixelSize: 15, color: Color.BLUE }}
                ></Entity>
            </Viewer>
            <div
                id="testDiv"
                style={{
                    backgroundColor: 'black',
                    position: 'absolute',
                    left: coordinates.x,
                    top: coordinates.y,
                    width: 300,
                    display: load ? 'inline-block' : 'none'
                }}
            >
                <p className="expandable">
                    Cum enim magna parturient ac elementum, tincidunt tempor ac
                    lectus platea placerat. Eros dis lectus. Ut aliquam.
                    Porttitor risus mattis mauris lacus a, aliquam augue cras
                    elementum! Adipiscing, vel ridiculus diam pellentesque
                    sociis habitasse pellentesque, augue parturient sed
                    elementum aenean. Tincidunt tristique.
                </p>
            </div>
        </div>
    );
};

export default Resium;
