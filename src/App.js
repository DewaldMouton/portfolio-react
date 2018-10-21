import React, { Component } from 'react';

import Info from './components/info/Info';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app p-10 grid-container">
        <Info />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
