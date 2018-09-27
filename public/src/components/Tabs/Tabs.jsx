import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tab from './Tab';

class Tabs extends Component {
    render() {
        return (
            <nav>
                <Tab path='information' name='Information'/>
                <Tab path='telegram' name='Telegram'/>
                <Tab path='submition' name='Submit'/>
            </nav>
        )
    }
}

export default withRouter(Tabs);