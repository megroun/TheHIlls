import React, { Component } from 'react';
import CategoryDropDown from './categorydropdown';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        // this.state = { 'locationSource': [] };
        // this.state = {};
        // var { id } = props.match.params;
        // id = Number(id);
        // const matchedRecord = CategoryDropDown.filter((record) => {
        //     console.log('INSPECT ', typeof id, typeof record.id);
        //     if (record.id === id) {
        //         console.log('INSPECT ', record);
        //         return record;
        //     }
        // });
        // this.state = { 'locationSource': matchedRecord[0] };

    }

    render() {
        return (
            <div className="dropdown-content dropdown-contentCategory" >
                {
                    this.props.myData.map((usercategories) => {
                        return (
                            <a location={usercategories.name} key={usercategories.id}>{usercategories.name}</a>
                        )
                    })
                }
            </div>

        );
    }

}

export default MenuItem;