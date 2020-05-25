import { Viewer, Camera, Entity, CameraFlyTo } from 'resium';
import React, { useEffect, useState } from 'react';
import Sparkle from 'react-sparkle';
import { Cartesian3, Cartesian2, Color } from 'cesium';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import References from './References';
import Contact from './Contact';
import Home from './Home';

const Resium = ({ data }) => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [load, setLoad] = useState(false);
    const [globe, setGlobe] = useState(false);
    const [nav, setNav] = useState('home');
    const [spark, setSpark] = useState(2);
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
    useEffect(() => {
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

    useEffect(() => {
        const interval = setInterval(() => {
            if (viewer) {
                console.log(viewer.cesiumElement.scene._globe.tilesLoaded)
                if (viewer.cesiumElement.scene._globe.tilesLoaded === true) setGlobe(true)
            }
        }, 1000);
        return () => clearInterval(interval);
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
                                setSpark(1);
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
                                setSpark(1)
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li className={nav === 'resume' ? 'current' : 'none'}>
                        <a
                            href="#resume"
                            onClick={() => {
                                if (nav !== 'resume') setLoad(false);
                                setNav('resume');
                                setSpark(2);
                            }}
                        >
                            Resume
                        </a>
                    </li>
                    <li className={nav === 'works' ? 'current' : 'none'}>
                        <a
                            href="#works"
                            onClick={() => {
                                if (nav !== 'works') setLoad(false);
                                setNav('works');
                                setSpark(2);
                            }}
                        >
                            Works
                            </a>
                    </li>
                    <li className={nav === 'references' ? 'current' : 'none'}>
                        <a
                            href="#references"
                            onClick={() => {
                                if (nav !== 'references') setLoad(false);
                                setNav('references');
                                setSpark(0);
                            }}
                        >
                            References
                        </a>
                    </li>
                    <li className={nav === 'contact' ? 'current' : 'none'}>
                        <a
                            href="#contact"
                            onClick={() => {
                                if (nav !== 'contact') setLoad(false);
                                setNav('contact');
                                setSpark(0);
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <Viewer full
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
                <div style={{
                    //backgroundColor: 'orange',
                    width: '28%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none'
                }}>
                    {spark > 0 && (<Sparkle
                        minSize={1}
                        maxSize={8}
                        flickerSpeed={'slowest'}
                        count={10}
                        fadeOutSpeed={20}
                    />)}
                </div>
                <div style={{
                    //backgroundColor: 'red',
                    width: '45%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '28%',
                    pointerEvents: 'none'
                }}>
                    {spark > 1 && (<Sparkle
                        minSize={1}
                        maxSize={8}
                        flickerSpeed={'slowest'}
                        count={10}
                        fadeOutSpeed={20}
                    />)}
                </div>
                <div style={{
                    //backgroundColor: 'yellow',
                    width: '28%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    pointerEvents: 'none'
                }}>

                    {spark > 0 && (<Sparkle
                        minSize={1}
                        maxSize={8}
                        flickerSpeed={'slowest'}
                        count={10}
                        fadeOutSpeed={20}
                        style={{ clipPath: 'circle(60px at center)' }}
                    />)}

                </div>

                <Camera
                    onChange={() => updateCoordinates()}
                    onMoveEnd={() => setLoad(true)}
                    percentageChanged={0.001}
                />
                {nav === 'home' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-80, 10, 30000000)}
                        duration={1}
                        once={true}
                    />
                )}
                {nav === 'about' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-90, 38, 20000000)}
                        duration={1}
                        once={true}
                    />
                )}
                {nav === 'about' && load && (
                    <Entity
                        position={Cartesian3.fromDegrees(-120, 38)}
                        point={{ pixelSize: 15, color: Color.BLUE }}
                    //onClick={() => setLoad(true)}
                    ></Entity>
                )}
                {nav === 'resume' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-90, 38, 30000000)}
                        orientation={{
                            direction: new Cartesian3(-0.04231243104240401, -0.20123236049443421, -0.97862924300734),
                            up: new Cartesian3(0, 0, 0)
                        }}
                        duration={1}
                        once={true}
                    />
                )}
                {nav === 'works' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-90, 38, 180000000)}
                        duration={1}
                        once={true}
                    />
                )}
                {nav === 'references' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-118, 35, 10000000)}
                        duration={1}
                        once={true}
                    />
                )}
                {nav === 'contact' && (
                    <CameraFlyTo
                        destination={Cartesian3.fromDegrees(-120, 38, 1000000)}
                        duration={1}
                        once={true}
                    />
                )}
                <About
                    x={coordinates.x}
                    y={coordinates.y}
                    setLoad={setLoad}
                    load={load}
                    nav={nav}
                    data={data.main}
                />
                <Home
                    setLoad={setLoad}
                    load={load}
                    nav={nav}
                    data={data.main}
                />
                <Resume
                    setLoad={setLoad}
                    load={load}
                    nav={nav}
                    data={data.resume}
                />
                <Portfolio
                    setLoad={setLoad}
                    load={load}
                    nav={nav}
                    data={data.portfolio}
                />
                <References
                    setLoad={setLoad}
                    load={load}
                    nav={nav}
                    data={data.testimonials}
                />
                <Contact
                    setLoad={setLoad}
                    load={load}
                    nav={nav}
                    data={data.main}
                />
            </Viewer>
            <div style={{
                backgroundColor: 'red',
                width: '10%',
                height: '10%',
                position: 'absolute',
                top: '45%',
                right: '35%',
                pointerEvents: 'none'
            }} />
            {globe === true && (<div style={{
                backgroundColor: 'yellow',
                width: '10%',
                height: '10%',
                position: 'absolute',
                top: '45%',
                right: '55%',
                pointerEvents: 'none'
            }} />)}
        </div>
    );
};

export default Resium;
