import React, { Component } from 'react'
import Logo from '../Logo';
import SubmissionForm from './SubmissionForm';
import Tabs from '../Tabs/Tabs';

export default class Submissions extends Component {
    render() {
        return (
            <div className='container'>
                <Logo />
                <hr />
                <Tabs />
                <SubmissionForm />
            </div>
        )
    }
}
