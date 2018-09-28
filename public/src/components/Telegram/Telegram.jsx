import React, { Component } from 'react';
import Users from './Users';
import Logo from '../Logo';
import Tabs from '../Tabs/Tabs';

export default class Telegram extends Component {
    render() {
        return (
            <div className='container'>
                <Logo />
                <hr />
                <Tabs />
                <Users />
            </div>
        )
    }
}
