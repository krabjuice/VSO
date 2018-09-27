import React, { Component } from 'react';
import Users from './Users';
import Logo from '../Logo';

export default class Telegram extends Component {
    handleInformation() {
        // fetch('/api/users')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             users: data
        //         });
        //     });
    }

    render() {
        return (
            <div>
                <Logo />
                <Users />
            </div>
        )
    }
}
