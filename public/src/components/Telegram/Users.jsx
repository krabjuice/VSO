import React, { Component } from 'react';
import verifiedCheck from '../../assests/images/checkmark.png';
import nonverifiedCheck from '../../assests/images/non-verified.png';

export default class Telegram extends Component {
    constructor(props) {
        super(props);

        this['state'] = {
            users: []
        }

        this['handleDisplay'] = this['handleDisplay'].bind(this);
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
    }

    handleVerified(verified) {
        console.log(verified);
        if(verified === 'TRUE') {
            return (
                <img src={verifiedCheck} alt='TRUE' width='25px' height='25px'/>
            );
        } else {
            return (
                <img src={nonverifiedCheck} alt='FALSE' width='25px' height='25px'/>
            );
        }
    }

    handleDisplay() {
        if (this['state']['users']['length'] !== 0) {
            return (
                <div>
                    {this['state']['users'].map(element => {
                        return (
                            <div className='row'>
                                <div className='col-3'>{element['verified']}</div>
                                <div className='col-3'>{element['username']}</div>
                                <div className='col-3'>{element['telegram']}</div>
                                <div className='col-3'>{element['selly']}</div>
                            </div>
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
                {this.handleDisplay()}
            </div>
        )
    }
}
