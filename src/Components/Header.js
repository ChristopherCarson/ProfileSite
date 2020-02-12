import React from 'react';
import FadeIn from 'react-fade-in';
import Sparkle from 'react-sparkle';

const Header = ({ data }) => (
    <header id="home">
        <Sparkle
            minSize={1}
            maxSize={8}
            flickerSpeed={'slowest'}
            count={6}
            fadeOutSpeed={20}
        />
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
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

        {data && (
            <div className="row banner">
                <div className="banner-text">
                    <FadeIn delay={150}>
                        <h1 className="responsive-headline">{data.name}</h1>
                        <h2 className="responsive-headline">
                            {data.occupation}
                        </h2>

                        <hr />
                        <h3>{data.description}</h3>
                        <hr />
                        <h3 className="responsive-headline">
                            Security Clearance Level: Secret
                        </h3>

                        <hr />
                        <ul className="social">
                            {data.social.map(network => (
                                <li key={network.name}>
                                    <a href={network.url}>
                                        <i className={network.className}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </div>
        )}

        <p className="scrolldown">
            <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
            </a>
        </p>
    </header>
);

export default Header;
