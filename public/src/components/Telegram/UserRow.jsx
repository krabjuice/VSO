import React, { Component } from 'react'

export default class UserRow extends Component {
    constructor(props) {
        super(props);

        this['state'] = {
            isHovered: false
        }
        
        this['handleSellingInformation'] = this['handleSellingInformation'].bind(this);
        this['handleMouseEnter'] = this['handleMouseEnter'].bind(this);
        this['handleMouseLeave'] = this['handleMouseLeave'].bind(this);
    }

    handleMouseEnter(sellingInformation) {
        this.setState({
            sellingInformation,
            isHovered: true
        });
    }

    handleMouseLeave(event) {
        this.setState({
            sellingInformation: '',
            isHovered: false
        });
    }

    handleSellingInformation() {
        if (!this.state.isHovered) {
            return;
        }

        if (this['props']['sellingInformation']['length'] !== 0) {
            return (
                <div style={{ marginTop: '2vh' }}>
                    User is selling:
                    <div>
                        {this['props']['sellingInformation']}
                    </div>
                    <hr />
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
            <div className='row'>
                <div className='col-3'>{this['props']['verified']}</div>
                <div className='col-3' onMouseEnter={() => this.handleMouseEnter(this['props']['sellingInformation'])} onMouseLeave={() => this.handleMouseLeave()}>{this['props']['username']}</div>
                <div className='col-3'>{this['props']['telegram']}</div>
                <div className='col-3'>{this['props']['selly']}</div>
                {this.handleSellingInformation()}
            </div>
        )
    }
}