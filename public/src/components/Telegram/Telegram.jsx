import React, { Component } from 'react';
import Users from './Users';
import Logo from '../Logo';
import Tabs from '../Tabs/Tabs';
import Search from './Search';

export default class Telegram extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Logo />
                    </div>
                    <div className='col-6'>
                        <Search />
                    </div>
                </div>
                <hr />
                <Tabs />
                <Users />
            </div>
        )
    }
}
