import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tab from './Tab';

class Tabs extends Component {
    render() {
        return (
            <nav className='text-center' style={{ marginBottom: '3vh' }}>
                <Tab path='' name='Information'/>
                |
                <Tab path='sellers' name='Sellers'/>
                |
                <Tab path='submission' name='Submission'/>
                <hr style={{ width: '300px' }} />
            </nav>
        )
    }
}

export default withRouter(Tabs);