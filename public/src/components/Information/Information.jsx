import React, { Component } from 'react';
import InformationOnVSO from './InformationOnVSO';
import Logo from '../Logo';

export default class Information extends Component {
    render() {
        return (
            <div>
                <Logo />
                <InformationOnVSO />
            </div>
        )
    }
}