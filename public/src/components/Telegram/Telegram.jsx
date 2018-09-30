import React, { Component } from 'react';
import Users from './Users';
import Logo from '../Logo';
import Tabs from '../Tabs/Tabs';
import axios from 'axios';
import UserRow from './UserRow';
import verifiedCheck from '../../assests/images/checkmark.png';
import nonverifiedCheck from '../../assests/images/non-verified.png';

export default class Telegram extends Component {
    constructor(props) {
        super(props);
        this['state'] = {
            search: '',
            username: '',
            verified: false,
            telegram: '',
            selly: '',
            sellingInformation: '',
            submitted: '',
            color: ''
        }

        this['handleSubmit'] = this['handleSubmit'].bind(this);
        this['handleChangeState'] = this['handleChangeState'].bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let payload = {
            username: this['state']['search']
        }

        axios.post('/api/search', payload)
            .then(res => {
                console.log(res);
                console.log(res['data']);
                console.log(res['data'][0]);
                this.setState({
                    username: res['data'][0]['username'],
                    verified: res['data'][0]['verified'],
                    telegram: res['data'][0]['telegram'],
                    selly: res['data'][0]['selly'],
                    sellingInformation: res['data'][0]['sellingInformation'],
                    search: ''
                });
            }).catch(err => {
                console.log(err);
                this.setState({
                    submitted: 'Error on search!',
                    color: '#ff0000'
                });
            });
    }

    handleChangeState(event) {
        this.setState({
            [event['target']['name']]: event['target']['value']
        });
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

    handleFoundUsers() {
        if (this['state']['username']['length'] !== 0) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>Verified</div>
                        <div className='col-3'>Username</div>
                        <div className='col-3'>Telegram</div>
                        <div className='col-3'>Selly.gg</div>
                    </div>
                    <hr />
                    <UserRow verified={this.handleVerified(this['state']['verified'])} username={this['state']['username']} telegramUsername={this['state']['telegramUsername']} telegramURL={this['state']['telegramURL']} selly={this['state']['selly']} sellingInformation={this['state']['sellingInformation']}/>
                </div>
            )
        }

        return (
            <div style={{ color: this['state']['color'] }}>
                {this['state']['submitted']}
            </div>
        )
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Logo />
                    </div>
                    <div className='col-6'>
                        <form className='text-center' onSubmit={this.handleSubmit} style={{ overflow: 'hidden' }}>
                            <div className='row' style={{ marginTop: '3vh' }}>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <input style={{ height: '30px', fontSize: '1rem' }} type='text' className='form-control' required='required' name='search' value={this['state']['search']} onChange={this['handleChangeState']} placeholder='Search by username!' />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <button style={{ height: '30px', lineHeight: '0', fontSize: '1rem' }} type='submit' value='Submit' className='btn btn-dark btn-lg btn-block'>Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {this.handleFoundUsers()}
                </div>
                <hr />
                <Tabs />
                <Users />
            </div>
        )
    }
}