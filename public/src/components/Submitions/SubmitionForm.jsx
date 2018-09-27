import React, { Component } from 'react'

export default class SubmitionForm extends Component {
    constructor(props) {
        super(props);
        this['state'] = {
            username: '',
            telegram: '',
            selly: '',
            proof: ''
        }

        this['handleSubmit'] = this['handleSubmit'].bind(this);
        this['handleChangeState'] = this['handleChangeState'].bind(this);
    }

    handleSubmit() {

    }

    handleChangeState(event) {
        this.setState({
            [event.target.name]: event['target']['value']
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' required='required' name='username' value={this['state']['username']} onChange={this['handleChangeState']} placeholder='Username'/>
                    <input type='text' required='required' name='telegram' value={this['state']['telegram']} onChange={this['handleChangeState']} placeholder='Telegram'/>
                    <input type='text' required='required' name='selly' value={this['state']['selly']} onChange={this['handleChangeState']} placeholder='Selly.gg'/>
                    <input type='text' name='proof' value={this['state']['proof']} onChange={this['handleChangeState']} placeholder='Proof of Vouch'/>
                </form>
            </div>
        )
    }
}
