import React, { Component } from 'react';
import update from 'react/lib/update';
import Image from './image.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import flow from 'lodash/flow';



class Container extends Component {
  constructor(props) {
    super(props);
    this.moveImage = this.moveImage.bind(this);
    this.state = {
      images: this.props.images
    };
  }

  moveImage(dragIndex, hoverIndex) {
    const { images } = this.state;
    const dragImage = images[dragIndex];
    this.props.updateImages(dragIndex,hoverIndex,dragImage);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.images
    });
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        {images.map((image, i) => {
          return (
            <Image className='col-sm-4 single-item'
              key={i}
              index={i}
              id={i}
              src={image.preview}
              moveImage={this.moveImage} 
            />
          );
        })}
      </div>
    );
  }
}

export default flow(
  DragDropContext(HTML5Backend)
)(Container);