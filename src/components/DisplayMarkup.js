import React, { Component } from 'react';
import Marked from 'marked';

class DisplayMarkup extends Component {

  createMarkup(content) {
    const userContent = Marked(content, {
      sanitize: true
    });
    return { __html: Marked(userContent) };
  }

  render(){
    return (
      <div dangerouslySetInnerHTML={ this.createMarkup(this.props.content) } ></div>
    );
  }

}

export default DisplayMarkup;
