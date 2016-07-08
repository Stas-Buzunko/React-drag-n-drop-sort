import React, { Component } from 'react';
import Upload from './upload';
import Display from './display';


export default class App extends Component {

  render() {
    return (
      <div>
        <Upload/>
        <Display/>
      </div>
    );
  }
}
