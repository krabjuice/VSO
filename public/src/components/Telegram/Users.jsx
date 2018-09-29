import React, { Component } from 'react';
import verifiedCheck from '../../assests/images/checkmark.png';
import nonverifiedCheck from '../../assests/images/non-verified.png';
import UserRow from './UserRow';

export default class Telegram extends Component {
    constructor(props) {
        super(props);

        this['state'] = {
            users: [
                // {
                //     verified: true,
                //     sellingInformation: 'test',
                //     username: 'test',
                //     telegram: 'test',
                //     selly: 'test'
                // },
                // {
                //     verified: true,
                //     sellingInformation: 'test',
                //     username: 'test',
                //     telegram: 'test',
                //     selly: 'test'
                // }
            ],
            sellingInformation: '',
        }

        this['handleUserDisplay'] = this['handleUserDisplay'].bind(this);
        this['handleInformation'] = this['handleInformation'].bind(this);
    }

    componentWillMount() {
        this.handleInformation();
    }

    componentDidMount() {
        setInterval(this.handleInformation, 5000);
    }

    handleInformation() {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data
                });
            });

        // this.setState({
        //     [this.state.users[0].verified]: true,
        //     [this.state.users[0].sellingInformation]: 'test',
        //     [this.state.users[0].username]: 'test',
        //     [this.state.users[0].telegram]: 'test',
        //     [this.state.users[0].selly]: 'test'
        // });
    }

    handleVerified(verified) {
        if (verified === 'TRUE') {
            return (
                <img src={verifiedCheck} alt='TRUE' width='25px' height='25px' />
            );
        } else {
            return (
                <img src={nonverifiedCheck} alt='FALSE' width='25px' height='25px' />
            );
        }
    }

    handleUserDisplay() {
        if (this['state']['users']['length'] !== 0) {
            return (
                <div>
                    {this['state']['users'].map(element => {
                        return (
                            <UserRow verified={this.handleVerified(element['verified'])} username={element['username']} telegram={element['telegram']} selly={element['selly']} sellingInformation={element['sellingInformation']}/>
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    No data!
                </div>
            );
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>Verified</div>
                    <div className='col-3'>Username</div>
                    <div className='col-3'>Telegram</div>
                    <div className='col-3'>Selly.gg</div>
                </div>
                <hr />
                {this.handleUserDisplay()}
            </div>
        )
    }
}
