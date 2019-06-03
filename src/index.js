import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./css/navbar.css";
import "./css/location.css";
import "./css/category.css";
import "./css/slide.css";
import "./css/footer.css";
import "./css/adsinfo.css";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
