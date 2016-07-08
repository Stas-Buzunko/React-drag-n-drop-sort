import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class Upload extends Component {
	onDrop(imageFile) {
    for (var i = 0; i < imageFile.length; i++) {
      this.props.uploadImage(imageFile[i]); 
    }
  }
  onOpenClick() {
    this.refs.dropzone.open();
  }
  
  render() {
  	return (
  		<div className="col-sm-4">
  			<h2>Upload Images</h2>
	  		<Dropzone 
          className="dropzone-container" 
          ref="dropzone" 
          onDrop={this.onDrop.bind(this)}
        >
	        <div className="drop-text">Drop your image here</div>
	      </Dropzone>
	      <button 
          className="btn btn-primary btn-block btn-lg" 
          onClick={this.onOpenClick.bind(this)}
        >Upload
        </button>
        <h2>Images in grid </h2>
        <ul>
          {this.props.images.map((image,i) => {
            return (
              <li key={i} onClick={() => this.props.deleteImage(image)}>
                <p className="img-name">
                  {image.name}
                  <span className="img-size">{Math.floor(image.size/1024)}KB</span>
                </p> 
              </li>
            );
          })}
        </ul>
      </div>
  	);
  }
}

function mapStateToProps(state) {
  return {
    images:state.images
  };
};
export default connect(mapStateToProps, actions)(Upload);