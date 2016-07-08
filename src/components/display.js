import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './container';
import * as actions from '../actions/';

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      images: []
    };
  }

  render() {
    return (
      <div className='col-sm-8 grid'>
        <Container images={this.props.images} 
          updateImages={this.props.updateImages}
        />
      </div>
    );
  }
} 

function mapStateToProps(state) {
  return {
    images:state.images
  };
};

export default connect(mapStateToProps, actions)(Display);