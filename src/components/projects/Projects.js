import React, { Component } from 'react';
import './Projects.css';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { headerTitle: "Test" };
    }

    render() {
        return (
            <div className="projects bg p-20 grid-item">
                <h1>Projects</h1>
            </div>
        );
    }
}