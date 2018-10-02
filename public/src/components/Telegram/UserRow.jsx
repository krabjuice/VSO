import React, { Component } from 'react';
import './css/UserRow.css';

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

    handleMouseLeave() {
        this.setState({
            sellingInformation: '',
            isHovered: false
        });
    }

    handleSellingInformation() {
        if (!this['state']['isHovered']) {
            return;
        }

        if (this['props']['sellingInformation']['length'] !== 0) {
            return (
                <div className='text-center'>
                    <div style={{ marginTop: '2vh', marginBottom: '2vh' }}>
                        {this['props']['username']} is selling:
                        <hr style={{ width: '125px' }} />
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

    handleTelegramURLVerification(telegramURL) {
        if (telegramURL === 'Unlisted') {
            return (
                <div className='col-3'>Unlisted</div>
            );
        }

        return (
            <a href={telegramURL} className='col-3' target='_blank' style={{ overflow: 'hidden' }}>{this['props']['telegramUsername']}</a>
        );
    }

    handleSellyURLVerification(sellyURL) {
        if (sellyURL === 'Unlisted') {
            return (
                <div className='col-3'>Unlisted</div>
            );
        }

        return (
            <a href={sellyURL} className='col-3' target='_blank' style={{ overflow: 'hidden' }}>{sellyURL}</a>
        );
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-3'>{this['props']['verified']}</div>
                    <div className='col-3' style={{ overflow: 'hidden' }} onMouseEnter={() => this.handleMouseEnter(this['props']['sellingInformation'])} onMouseLeave={() => this.handleMouseLeave()}>{this['props']['username']}</div>
                    {this.handleTelegramURLVerification(this['props']['telegramURL'])}
                    {this.handleSellyURLVerification(this['props']['selly'])}
                </div>
                {this.handleSellingInformation()}
            </div>
        );
    }
}