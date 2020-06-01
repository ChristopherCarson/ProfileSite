import React, { useState } from 'react';
import ReactGA from 'react-ga';
import Resium from './components/Resium';
import { hot } from 'react-hot-loader/root';
import HttpsRedirect from 'react-https-redirect';
import myData from './data/resumeData.json';
import { Wave } from 'react-animated-text';
import './css/main.css'
import './css/fontAwesome.css'
import './css/mediaQueries.css'

window.Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMDNhZDMzNC1mMjdmLTRhYmQtODAzNC1iYTk2YzI2MDNkMGMiLCJpZCI6MjI3NDYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODE5ODA5NDl9.H6S3q-avHgqM5VFoXZEF5wkmoiF62tUaMMOYqP9YP8E';

const App = () => {
    ReactGA.initialize('UA-158362600-1');
    ReactGA.pageview(window.location.pathname);
    const [globe, setGlobe] = useState(false);

    return (
        <HttpsRedirect>
            <div className="App" id="App">
                <Resium data={myData} globe={globe} setGlobe={setGlobe} />
                {globe === false && (<div style={{
                    width: 280,
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    marginLeft: -140,
                    pointerEvents: 'none',
                    textAlign: 'center',
                    fontSize: 20,
                }} >
                    <Wave text="LOADING CESIUM GLOBE..." effect="stretch" effectChange={1.5} />
                </div>)}
                {globe === false && (<div id="cf4a" style={{
                    width: '30%',
                    position: 'relative',
                    top: '25%',
                    left: window.innerWidth < 900 ? '60%' : '50%',
                    pointerEvents: 'none',
                    marginLeft: -100
                }} >
                    <img style={{
                        width: window.innerWidth < 480 ? 50 : 100,
                        opacity: 0, marginLeft: window.innerWidth < 480 ? 20 : 48,
                        marginTop: 15
                    }} alt="" src="images/skills/aws.png" />
                    <img style={{ width: 200, opacity: 0, marginTop: 15 }} alt="" src="images/skills/cesium.png" />
                    <img style={{ width: 200, opacity: 0 }} alt="" src="images/skills/react.png" />
                </div>)}
            </div>
        </HttpsRedirect>
    );
};

export default hot(App);
