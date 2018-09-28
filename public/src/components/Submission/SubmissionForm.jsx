import React, { Component } from 'react';
import axios from 'axios';

export default class SubmissionForm extends Component {
    constructor(props) {
        super(props);
        this['state'] = {
            username: '',
            telegram: '',
            selly: '',
            proof: '',
            submitted: '',
            color: ''
        }

        this['handleSubmit'] = this['handleSubmit'].bind(this);
        this['handleChangeState'] = this['handleChangeState'].bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let payload = {
            username: this['state']['username'],
            telegram: this['state']['telegram'],
            selly: this['state']['selly'],
            proof: this['state']['proof']
        }

        axios.post('/api/submissions', payload)
            .then(res => {
                this.setState({
                    submitted: 'Submission successful!',
                    color: '#00ff00'
                });
            }).catch(err => {
                this.setState({
                    submitted: 'Error on submission!',
                    color: '#ff0000'
                });

                console.log(err);
            });
    }

    handleChangeState(event) {
        this.setState({
            [event['target']['name']]: event['target']['value']
        });
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center' style={{ justifyContent: 'center', display: 'flex' }}>
                        <div className='card' style={{ width: '50%' }}>
                            <div className='card-header text-center font-weight-bold' style={{ color: 'black' }}>Submission</div>
                            <div className='card-body text-center'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' required='required' name='username' value={this['state']['username']} onChange={this['handleChangeState']} placeholder='Username' />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' required='required' name='telegram' value={this['state']['telegram']} onChange={this['handleChangeState']} placeholder='Telegram' />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' required='required' name='selly' value={this['state']['selly']} onChange={this['handleChangeState']} placeholder='Selly.gg' />
                                    </div>
                                    <div className='form-group'>
                                        <textarea type='text' className='form-control' name='proof' value={this['state']['proof']} onChange={this['handleChangeState']} placeholder='Proof of Vouch' />
                                    </div>
                                    <div className='form-group'>
                                        <button type='submit' value='Submit' className='btn btn-dark btn-lg btn-block'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='text-center' style={{ color: this['state']['color'], marginTop: '2vh' }}>{this['state']['submitted']}</div>
                </div>
            </div>
        )
    }
}
