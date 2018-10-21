import React, { Component, Route } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Info.css';

library.add(faGithub);
library.add(faLinkedin)

export default class info extends Component {
    constructor(props) {
        super(props);
        this.state = { headerTitle: "Test" };
    }

    render() {
        return (
            <div className="info grid-container">
                <Header />
                <AboutMe />
                <Links />
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="grid-container bg header">
                <Icon />
                <Title />
            </div>
        );
    }
}

class Icon extends Component {
    render() {
        return (
            <div className="icon" >
            </div>
        )
    }
}

class Title extends Component {
    render() {
        return (
            <div className="title grid-item">
                <h1 className="name">Dewald Mouton</h1>
            </div>
        );
    }
}

// class ProfilePic extends Component {
//     render() {
//         return (
//             <div className="profile-pic grid-item">
//             </div>
//         );
//     }
// }

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme p-20 bg grid-item">
                <h1>About Me</h1>
                <p className="aboutme-text">I have always been passionate about technology. And my way of expressing this love of technology is through programming.
                    <br />
                    Learning something new every day , pushing myself to new heights every step of the way, is my way of being.</p>
            </div>
        )
    }
}

class Links extends Component {
    render() {
        return (
            <div className="links grid-item">

                <div className="link github bg">

                    <a href="https://github.com/DewaldMouton?tab=repositories" target="_blank" className="link-a" onClick={this.githubLink}>
                        <div className="link-container">

                            <FontAwesomeIcon className="link-ico" icon={faGithub} />
                            <h2 className="link-text">Github</h2>

                        </div>
                    </a>

                </div>

                <div className="link linkedin bg">

                    <a href="https://www.linkedin.com/in/dewald-mouton-925837145/" target="_blank" className="link-a" onClick={this.linkedinLink}>
                        <div className="link-container">

                            <FontAwesomeIcon className="link-ico" icon={faLinkedin} />
                            <h2 className="link-text">LinkedIn</h2>

                        </div>
                    </a>
                </div>

                <div className="link contact bg">

                    <a className="link-a" onClick={this.githubLink}>
                        <div className="link-container">

                            <FontAwesomeIcon className="link-ico" icon={faPaperPlane} />
                            <h2 className="link-text">Mail</h2>

                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

