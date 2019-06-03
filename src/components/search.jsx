import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Fa500px } from '@fortawesome/free-solid-svg-icons';
// import { Fa500px } from "react-icons/fa";
import IosSearch from 'react-ionicons/lib/IosSearch';
// import FilterResults from 'react-filter-search';
import Adsinfo from './adsinfo';

class Search extends Component {
    styles = {
        fontSize: "30px",
        color: "black",
        height: "20px",
        position: "relative",
        bottom: "5px"
    };
    // constructor(props) {
    //     super(props)
    //     this.handleClicker = this.handleClicker.bind(this)
    // }

    // handleClicker() {
    //     this.setState(e => {
    //         console.log('Data Clicked');
    //     });
    // }
    /////////////////////////////////////////////////////////////////
    //SearchFilterCode
    ////////////////////////////////////////////////////////////////
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         value: ''
    //     };
    // }

    // componentWillMount() {
    //     // fetch('https://jsonplaceholder.typicode.com/users')
    //     fetch('./adsData.jsx')
    //         .then(response => response.json())
    //         .then(json => this.setState({ data: json }));
    // }

    // handleChange = event => {
    //     const { value } = event.target;
    //     this.setState({ value });
    // };

    render() {
        // const { data, value } = this.state;
        return (
            <div className="search">
                <input type="text" className="searchBar" placeholder="Search your needs and more..."></input>
                {/* <div>
                    <input type="text" className="searchBar" placeholder="Search your needs and more..." value={value} onChange={this.handleChange} />
                    <FilterResults
                        value={value}
                        data={data}
                        renderResults={results => (
                            <div>
                                {results.map(el => (
                                    <div>
                                        <span>{el.name}</span>
                                        <span>{el.suite}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    />
                </div> */}
                <button className="btn btn-warning btn-sm" id="searchButton"><IosSearch style={this.styles} /></button>
                {/* <button className="btn btn-warning btn-sm" id="searchButton" onClick={this.handleClicker}><IosSearch beat={true} style={this.styles} /></button> */}
            </div>
        );
    }
}

export default Search;