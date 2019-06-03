import React, { Component } from 'react';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook/';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
// import MdMail from 'react-ionicons/lib/MdMail';
// import MdChatboxes from 'react-ionicons/lib/MdChatboxes';


class Footer extends Component {
    styles = {
        color: 'white'
    }
    render() {
        return (
            // <div className="footer bg-dark">
            <div className="footer bg-dark">
                <div className="info">
                    <span className="navbar-brand Fa500px" href="#" id="logoNamefooter">THE HILLS<br />
                        <a id="byName" href="#">Developed by Ducklin Technologies</a>
                        <span className="badge badge-pill badge-secondary"></span>
                    </span>
                    {/* <div className="Additional_Info">
                        <div className="title">Additional Info</div>
                        <div className="links"><MdMail style={this.styles} beat={true} color="red" />Email Us</div>
                        <div className="links"><MdChatboxes style={this.styles} shake={true} color="#00acee" />Chat with Us</div>
                    </div> */}
                </div>
                <div className="Social_Media" >
                    <div className="title1">Social Media</div>
                    <div className="links"><LogoFacebook style={this.styles} shake={true} color="white" />Facebook</div>
                    <div className="links" id="twitter"><LogoTwitter style={this.styles} beat={true} color=" #00acee" />Twitter</div>
                    <div className="links"><LogoInstagram style={this.styles} rotate={true} color=" pink" />Instagram</div>
                </div>
                <div className="Address">
                    <div className="title2">Address</div>
                    <div className="links">Bangalore, India
                    </div>
                </div>
            </div>
            // </div>
        );
    }
}

export default Footer;