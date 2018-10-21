import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { headerTitle: "Test" };
    }

    render() {
        return (
            <div className="contact p-20 bg grid-item">
                <h1>Contact Me</h1>

                <ul className="contact-list">
                    <li className="item">Cell:<br /> +27 81 409 3242</li>
                    <li className="item">Tel:<br /> +27 21 981 9347</li>
                    <li className="item">Email:<br /> moutondewald@gmail.com</li>
                </ul>
            </div>
        );
    }
}