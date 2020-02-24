import { Viewer, Camera, Entity, CameraFlyTo } from 'resium';
import React, { useEffect, useState } from 'react';
import Sparkle from 'react-sparkle';
import { Cartesian3, Cartesian2, Color } from 'cesium';
import AboutMe from './AboutMe';
//import MyComponent from './Resize';

const Resium = ({ data }) => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [load, setLoad] = useState(false);
    const [nav, setNav] = useState('home');
    const posit = new Cartesian2();
    let viewer;

    function debounce(fn, ms) {
        let timer;
        return _ => {
            clearTimeout(timer);
            timer = setTimeout(_ => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }, 1000);

        window.addEventListener('resize', debouncedHandleResize);

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    });

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
                    <li className={nav === 'home' ? 'current' : 'none'}>
                        <a
                            href="#home"
                            onClick={() => {
                                if (nav !== 'home') setLoad(false);
                                setNav('home');
                            }}
                        >
                            Home
                        </a>
                    </li>
                    <li className={nav === 'about' ? 'current' : 'none'}>
                        <a
                            href="#about"
                            onClick={() => {
                                if (nav !== 'about') setLoad(false);
                                setNav('about');
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li className={nav === 'resume' ? 'current' : 'none'}>
                        <a href="#resume" onClick={() => setNav('resume')}>
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
                {nav === 'about' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-90, 38, 20000000)}
                        duration={1}
                        once={true}
                    />
                )}
                {nav === 'home' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-80, 10, 30000000)}
                        duration={1}
                        once={true}
                    />
                )}
                {nav === 'about' && load && (
                    <Entity
                        position={Cartesian3.fromDegrees(-120, 38)}
                        point={{ pixelSize: 15, color: Color.BLUE }}
                        onClick={() => setLoad(true)}
                    ></Entity>
                )}
            </Viewer>

            <AboutMe
                x={coordinates.x}
                y={coordinates.y}
                dimensions={dimensions}
                setLoad={setLoad}
                load={load}
                nav={nav}
                updateCoordinates={updateCoordinates}
                data={data.main}
            />
        </div>
    );
};

export default Resium;
