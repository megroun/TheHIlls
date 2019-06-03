import React, { Component } from 'react';
import MenuItem from './menuitem';

class LocationDropDown extends Component {
    state = {
        Locations: [
            { name: 'Viratnagar', id: 1 },
            { name: 'Roopena-Agarahara', id: 2 },
            { name: 'Begur', id: 3 },
            { name: 'Hongasandra', id: 4 }
            // { location: 'Viratnagar' }
        ]
    };
    render() {
        return (
            <div className="dropdown hidden-xs-up">
                {/* <button onMouseOver={this.getLocation.bind(this)} className="dropbtn">
                    <i className="arrow down"></i>Location
                </button> */}
                <button className="dropbtn hidden-xs-up">
                    <i className="arrow down"></i>Location
                </button>
                <MenuItem myData={this.state.Locations}></MenuItem>
                {/* <div id="myDropdown" className="dropdown-content">
                    {
                        this.state.Locations.map((userlocation) => {
                            return (
                                <a location={userlocation.location}
                                    key={userlocation.id}>{userlocation.location}</a>
                            )
                        })
                    }
                </div> */}
            </div>
        );
    }
    // getLocation(event) {
    //     console.log('reached ', event.target.matches('.dropbtn'));
    //     if (event.target.matches('.dropbtn')) {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         for (let i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //             } else {
    //                 openDropdown.classList.add('show');
    //             }
    //         }
    //     }
    // }
}

export default LocationDropDown;