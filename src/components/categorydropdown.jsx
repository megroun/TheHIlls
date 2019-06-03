import React, { Component } from 'react';
import MenuItem from './menuitem';
import categoryList from './categoryList';
import { listenerCount } from 'events';
// import PageContent from 's.json'

class CategoryDropDown extends Component {
    state = {
        Categories: [
            { name: 'Properties', id: 1 },
            { name: 'Hotels', id: 2 },
            { name: 'Education', id: 3 },
            { name: 'Health Care', id: 4 },
            { name: 'Repair', id: 5 },
            { name: 'Groceries', id: 6 },
            { name: 'Fitness', id: 7 },
            { name: 'Pet Car', id: 8 },
            { name: 'Furniture', id: 9 },
            { name: 'Electronics', id: 10 },
            { name: 'Stationery', id: 11 },
            { name: 'Saloon', id: 12 }
        ]
    };

    render() {
        return (
            // <div>
            //     {
            //         categoryList.map((list)=>{
            //             return(
            //                 <div className="dropdown-content dropdown-contentCategory">

            //                 </div>
            //             )
            //         })
            //     }
            // </div>
            <div className="dropdownCategory hidden-xs-up">
                <button className="dropbtnCategory hidden-xs-up">
                    <i className="arrow downCategory hidden-xs-up"></i>Browse by category
                </button>
                <MenuItem myData={this.state.Categories}></MenuItem>
            </div>

        );
    }

}

export default CategoryDropDown;
