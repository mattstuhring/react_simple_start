import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create a new component.  This component should produce some HTML
export default class App extends Component {
  render() {
    return (
      <div>Hello React!</div>
    );
  }
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
