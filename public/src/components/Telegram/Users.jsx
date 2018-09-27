import React, { Component } from 'react'

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

    }

    handleInformation() {
        // fetch('/api/users')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             users: data
        //         });
        //     });
    }

    handleDisplay() {
        console.log(this.state.users);
        if (this['state']['users']['length'] != 0) {
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
            <div id='telegram'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>Verified</div>
                        <div className='col-3'>Username</div>
                        <div className='col-3'>Telegram</div>
                        <div className='col-3'>Selly.gg</div>
                    </div>
                    {this.handleDisplay()}
                </div>
            </div>
        )
    }
}
