import React, { Component } from 'react';

import Owl from './Owl';
import Search from './Search';
import Logos from './Logos';
import StoreLanding from './StoreLanding';


class Landing extends Component {
    render() {
        return (
            <div >
                 <Owl/>
                 <StoreLanding/>
                <Search/>
                <Logos/>
            </div>
        );
    }
}

export default Landing;