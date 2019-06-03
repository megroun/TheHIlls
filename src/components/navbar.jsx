import React, { Component } from 'react';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Fa500px } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Icon } from 'rmdi';
// import Search from './search';
// import LocationDropDown from './locationdropdown';
// import CategoryDropDown from './categorydropdown';
// import Content from './content';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
// import {BeakerIcon, ArrowSmallDownIcon, octicon-search} from 'react-octicons';
// import IosSearch from 'react-ionicons/lib/IosSearch';

class Navbar extends Component {

  render() {
    // console.log(typeof this.props.actionButtons);
    // var todos = this.props.actionButtons.map(a => { return <button onClick={a.callback}>{a.label}</button> })

    // x.map(function (a) { console.log(a) });

    return (
      <div>
        <nav className="navbar navbar-dark bg-*" id="navBar">
          {/* navbar-dark bg-dark */}
          <a className="navbar-brand Fa500px" href="#" id="logoName" href="#">THE HILLS
            {/* <img className="logo" src={require("../images/theHillsLogo.png")} alt="logo" /> */}
            <span className="badge badge-pill badge-secondary"></span>
          </a>
          {/* {this.props.totalCounters} */}
          {/* <Search></Search> */}
          {/* <LocationDropDown></LocationDropDown>
          <CategoryDropDown></CategoryDropDown> */}
        </nav>
      </div>


    );
  }
}

export default Navbar;