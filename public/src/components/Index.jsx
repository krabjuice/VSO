import React, { Component } from 'react';
import logo from '../logo.svg';
import Logo from './Logo';
import Tabs from './Tabs/Tabs';

class Index extends Component {
    render() {
        return (
            <div className='container'>
                <Logo />
                <Tabs />
            </div>
        );
    }
}

export default Index;
