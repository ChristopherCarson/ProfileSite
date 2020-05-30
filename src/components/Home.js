import React, { useEffect, useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { motion } from "framer-motion"

const Home = ({
    setLoad,
    load,
    nav,
    data,
    globe
}) => {
    const [x, setX] = useState(window.innerWidth * 1.5);
    const [y, setY] = useState(window.innerHeight * .5);
    const [rotate, setRotate] = useState(-150);
    const [scale, setScale] = useState(1.5);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (opacity === 1) {
                setX(-200)
                setY(window.innerHeight * .05)
                setScale(1.5)
                setRotate(0)
                setOpacity(0)

            } else if (opacity === 0) {
                setX(window.innerWidth * 1.5)
                setY(window.innerHeight * .5)
                setScale(1)
                setRotate(-150)
                setOpacity(1)
            }

        }, 8000);
        return () => clearInterval(interval);
    });

    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="spicy"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {nav === 'home' && load && globe && (
                    <div
                        id="about"
                        onClick={() => setLoad(false)}
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, .75)',
                            color: 'white',
                            position: 'absolute',
                            left: '15%',
                            top: '10%',
                            height: '80%',
                            width: '70%',
                            borderRadius: 30,
                            padding: 20,
                            textAlign: 'center',
                        }}
                    >
                        <br></br>
                        <h1>{data.name}</h1>
                        <br></br>
                        <h2 className="shimmer">{data.occupation}</h2>
                        <h3>{data.description}</h3>
                        <br></br><br></br>
                        <h4>Security Clearance Level: Secret</h4>
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
                )}
            </ReactCSSTransitionGroup>
            <motion.div
                style={{ position: 'absolute', width: 30, top: window.innerHeight * .2, left: -200, opacity: opacity }}
                animate={{
                    x: globe ? x : -200,
                    y: globe ? y : window.innerHeight * .02,
                    scale: globe ? scale : 1.5,
                    rotate: globe ? rotate : 0
                }}
                transition={{ duration: 15 }}
            >
                <img alt="" src="images/sat.png" />
            </motion.div >
        </div >
    );
};

export default Home;
