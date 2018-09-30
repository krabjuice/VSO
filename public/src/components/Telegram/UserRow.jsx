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
                <div className='text-center'>
                    <div style={{ marginTop: '2vh', marginBottom: '2vh' }}>
                        {this['props']['username']} is selling:
                        <hr style={{ width: '125px' }}/>
                        <div>{this['props']['sellingInformation']}</div>
                    </div>
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
            <div>
                <div className='row'>
                    <div className='col-3'>{this['props']['verified']}</div>
                    <div className='col-3' onMouseEnter={() => this.handleMouseEnter(this['props']['sellingInformation'])} onMouseLeave={() => this.handleMouseLeave()}>{this['props']['username']}</div>
                    <div className='col-3'>{this['props']['telegram']}</div>
                    <a href={this['props']['selly']} className='col-3'>{this['props']['selly']}</a>
                </div>
                {this.handleSellingInformation()}
            </div>
        )
    }
}