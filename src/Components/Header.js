import React from 'react';

const Header = ({ data }) => (
    <div id="home">
        {data && (
            <div className="row banner">
                <h1 className="shimmer">{data.name}</h1>
                <div className="banner-text">
                    <h2>{data.occupation}</h2>

                    <h3>{data.description}</h3>

                    <h3>Security Clearance Level: Secret</h3>

                    <ul className="social">
                        {data.social.map(network => (
                            <li key={network.name}>
                                <a href={network.url}>
                                    <i className={network.className}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
);

export default Header;
