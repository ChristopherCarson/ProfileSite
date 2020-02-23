import React from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Resium from './Components/Resium';
import { hot } from 'react-hot-loader/root';
import HttpsRedirect from 'react-https-redirect';
import myData from './data/resumeData.json';

window.Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMDNhZDMzNC1mMjdmLTRhYmQtODAzNC1iYTk2YzI2MDNkMGMiLCJpZCI6MjI3NDYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODE5ODA5NDl9.H6S3q-avHgqM5VFoXZEF5wkmoiF62tUaMMOYqP9YP8E';

const App = () => {
    ReactGA.initialize('UA-158362600-1');
    ReactGA.pageview(window.location.pathname);

    return (
        <HttpsRedirect>
            <div className="App" id="App">
                <Resium />
                {/**<Header data={myData.main} />*/}
                <About data={myData.main} />
                <Resume data={myData.resume} />
                <Portfolio data={myData.portfolio} />
                <Testimonials data={myData.testimonials} />
                <Contact data={myData.main} />
                <Footer data={myData.main} />
            </div>
        </HttpsRedirect>
    );
};

export default hot(App);
