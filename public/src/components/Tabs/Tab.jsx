import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Tab extends Component {
    constructor(props) {
        super(props);

        this['handleClick'] = this['handleClick'].bind(this);
    }

    handleClick(path) {
        this['props']['history'].push('/' + path);
    }

    render() {
        return (
            <nav>
                <div onClick={() => this.handleClick(this['props']['path'])}>{this['props']['name']}</div>
            </nav>
        )
    }
}

export default withRouter(Tab);