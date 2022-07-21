import React, { Component } from 'react';

import Banner from './Banner';
import Search from './Search';
import Logos from './Logos';
import StoreLanding from './StoreLanding';


class Landing extends Component {
    render() {
        return (
            <div >
                 <Banner/>
                 <StoreLanding/>
                <Search/>
                <Logos/>
            </div>
        );
    }
}

export default Landing;