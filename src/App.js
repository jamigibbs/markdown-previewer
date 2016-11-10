import React, { Component } from 'react';
import Header from './components/Header';
import DisplayMarkup from './components/DisplayMarkup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      content: '## A Simple Markdown Editor\n\nThis little ReactJS app is using the [Marked](https://github.com/chjj/marked) parser and compiler script. It\'s kinda neat, right?\n\n ## Some Examples \n\n Emphasis, aka italics, with *asterisks* or _underscores_.\n Strong emphasis, aka bold, with **asterisks** or __underscores__.\n Combined emphasis with **asterisks and _underscores_**.\n Strikethrough uses two tildes. ~~Scratch this.~~\n\n See more examples on the [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({content: e.target.value})
  }

  render() {
    return (
      <div>

        <Header />

        <div className="container-fluid">

          <div className="row">
            <div className="col-sm-6">
              <div className="textbox">
                <textarea value={this.state.content} onChange={this.handleChange} />
              </div>
            </div>

            <div className="col-sm-6 markup-display">
              <div className="textbox">
                <DisplayMarkup content={this.state.content} />
              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}

export default App;
