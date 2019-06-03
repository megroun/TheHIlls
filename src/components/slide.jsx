import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
// import { BrowserRouter as Link } from 'react-router-dom';
// import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import { BrowserRouter, Route, NavLink, Switch, Link, Redirect } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import Test from './test';
import AdsData from './adsData';
import jsonData from './datasource';
import Adsinfo from './adsinfo';
// import jsonData from './datasource.json';

class Slide extends Component {
    //    state={}
    // OnNavigateHandler() {
    //     return(
    //         <Route path="/test" component={Test}/>
    //     )
    // }


    render() {
        return (
            <div className="mainContainers">
                <div className="row">
                    {
                        AdsData.map((slideInfo) => {
                            const pathUrl = "/adsinfo/" + slideInfo.id;
                            return (
                                <div className="card1" key={slideInfo.id}>
                                    <Card className="classfiy" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={slideInfo.img} />
                                        <Card.Body>
                                            <Card.Title>{slideInfo.title}</Card.Title>
                                            <Card.Text>
                                                {slideInfo.content}
                                            </Card.Text>
                                            <Link path={pathUrl} to={pathUrl} key={Adsinfo.id}>
                                                <Button variant="primary">{slideInfo.button}
                                                </Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Slide;