import React, { Component } from 'react';
// import SimpleImageSlider from "react-simple-image-slider";
import { BrowserRouter, Route, NavLink, Switch, Link, Redirect } from 'react-router-dom';
import dataSource from './slidedata';
import jsonData from './datasource';
import Navbar from './navbar';
import Footer from './footer';

class Adsinfo extends Component {

    constructor(props) {
        super(props);
        this.state = { 'adSource': [] };
        this.state = {};
        var { id } = props.match.params;
        id = Number(id);
        const matchedRecord = jsonData.filter((record) => {
            console.log('INSPECT ', typeof id, typeof record.id);
            if (record.id === id) {
                console.log('INSPECT ', record);
                return record;
            }
        });
        this.state = { 'adSource': matchedRecord[0] };


        // console.log('INSPECT ', dataSource.filter(record));

    }
    render() {
        // const images = [
        //     { url: require("../images/hotelWeb.jpg"), id: 1 },
        //     { url: require("../images/apartments.jpeg"), id: 2 },
        //     { url: require("../images/hotelWeb.jpg"), id: 3 },
        // ];
        // console.log('INSPECT state ', this.state.adSource);
        // const imgPath = 'http://localhost/static/' + this.state.adSource.img;
        // const loadImg = <img src={imgPath} />;
        return (

            <div>


                {/* {
                    dataSource.map((imagedata) => {
                        return (
                            <div><img src={require(imagedata.img)} /></div>
                        )
                    })
                } */}


                {/* <SimpleImageSlider
                width={896}
                height={504}
                images={images}
            /> */}
                <Navbar />
                <div className="adsData">
                    <img className="adsImage" src={this.state.adSource.img} alt="" />
                </div>
                <h6 className="adsTitle">OFFERS</h6>
                <span className="adsOffer">
                    <span className="offerDetails">{this.state.adSource.offer} <br /></span>
                </span>

                <span className="aboutAds">
                    <h6 className="detailsTitle">DEATILS</h6>
                    {this.state.adSource.about}<br />
                </span>
                <span className="aboutSeller">
                    <h6 className="sellersDetails">SELLER INFO</h6>
                    {this.state.adSource.sellerinfo}<br />
                </span>
                <Footer />
            </div>
        );
    }
}
export default Adsinfo;