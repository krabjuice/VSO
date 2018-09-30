import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this['state'] = {
            username: '',
            submitted: '',
            color: ''
        }

        this['handleSubmit'] = this['handleSubmit'].bind(this);
        this['handleChangeState'] = this['handleChangeState'].bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let payload = {
            username: this['state']['username']
        }

        axios.post('/api/search', payload)
            .then(res => {
                console.log(res);
                this.setState({
                    submitted: 'Search successful!',
                    color: '#00ff00'
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

    render() {
        return (
            <form className='text-center' onSubmit={this.handleSubmit} style={{ overflow: 'hidden' }}>
                <div className='row' style={{ marginTop: '3vh'}}>
                    <div className='col-6'>
                        <div className='form-group'>
                            <input style={{ height: '30px', fontSize: '1rem' }} type='text' className='form-control' required='required' name='username' value={this['state']['username']} onChange={this['handleChangeState']} placeholder='Search by username!' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <button style={{ height: '30px', lineHeight: '0', fontSize: '1rem' }} type='submit' value='Submit' className='btn btn-dark btn-lg btn-block'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
