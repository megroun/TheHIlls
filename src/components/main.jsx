import React, { Component } from 'react';
// import React, { Component, lazy, Suspense } from 'react';
// import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import '../css/mainbanner.css';
import Navbar from './navbar';
import MainBanner from './mainbanner';
import Footer from './footer';
import Slide from './slide';
// import Test from './test';
// import Adsinfo from '../src/adsdetails/adsinfo'
import Adsinfo from './adsinfo';


// const Slide = lazy(() => {
//     return Promise.all([
//         import("./slide"),
//         new Promise(resolve => setTimeout(resolve, 300))
//     ])
//         .then(([moduleExports]) => moduleExports);
// })

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <Slide />
                <Footer />
                {/* <Adsinfo /> */}
            </React.Fragment>
        )
    }
}

export default Main;