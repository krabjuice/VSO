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
            <span onClick={() => this.handleClick(this['props']['path'])} style={{ marginLeft: '10px', marginRight: '10px'}}>{this['props']['name']}</span>
        );
    }
}

export default withRouter(Tab);