import React, { Component } from 'react';
import Logo from './Logo';
import Tabs from './Tabs/Tabs';
import InformationOnVSO from '../components/Information/InformationOnVSO';

class Index extends Component {
    render() {
        return (
            <div className='container'>
                <Logo />
                <hr />
                <Tabs />
                <InformationOnVSO />
            </div>
        );
    }
}

export default Index;
