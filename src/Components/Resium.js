import { Viewer } from 'resium';
import React from 'react';
import Sparkle from 'react-sparkle';

const Resium = () => {
    return (
        <div id="home">
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
            />
            <Sparkle
                minSize={1}
                maxSize={8}
                flickerSpeed={'slowest'}
                count={20}
                fadeOutSpeed={40}
            />
            <span
                style={{
                    position: 'absolute',
                    left: 650,
                    top: 200,
                    height: 600,
                    width: 600,
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    display: 'inline-block'
                }}
            ></span>
        </div>
    );
};

export default Resium;
