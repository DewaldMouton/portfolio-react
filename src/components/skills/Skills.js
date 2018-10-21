import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { headerTitle: "Test" };
    }

    render() {
        return (
            <div className="skills bg p-10 grid-item">
                <h1 className="skills-title">Skills</h1>

                <div className="skill-list">

                    <h2 className="skill">HTML</h2>
                    <h2 className="skill">CSS</h2>
                    <h2 className="skill">Javascript</h2>
                    <h2 className="skill">Jquery</h2>
                    <h2 className="skill">Angular</h2>
                    <h2 className="skill">React</h2>
                    <h2 className="skill">Node</h2>
                    <h2 className="skill">Java</h2>
                    <h2 className="skill">Android</h2>
                    <h2 className="skill">C#</h2>
                    <h2 className="skill">Xamarin</h2>
                    <h2 className="skill">Mvvm Cross</h2>
                    <h2 className="skill">Xamarin Forms</h2>
                    <h2 className="skill">Unity</h2>
                    <h2 className="skill">ASP .Net</h2>
                    <h2 className="skill">.Net Core</h2>
                    <h2 className="skill">SQL</h2>
                    <h2 className="skill">No SQL</h2>
                    <h2 className="skill">ARKit</h2>
                    <h2 className="skill">ARCore</h2>
                    <h2 className="skill">Vuforia</h2>
                    <h2 className="skill">Agile</h2>
                    <h2 className="skill">Scrum</h2>
                    <h2 className="skill">Team Leadership</h2>
                    <h2 className="skill">Team Working</h2>

                </div>
            </div>
        );
    }
}