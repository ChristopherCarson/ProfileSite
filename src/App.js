import React from 'react';
//import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import HttpsRedirect from 'react-https-redirect';
import myData from './data/resumeData.json';

const App = () => (
    <HttpsRedirect>
        <div className="App">
            <Header data={myData.main} />
            <About data={myData.main} />
            <Resume data={myData.resume} />
            <Portfolio data={myData.portfolio} />
            <Testimonials data={myData.testimonials} />
            <Contact data={myData.main} />
            <Footer data={myData.main} />
        </div>
    </HttpsRedirect>
);

export default App;
