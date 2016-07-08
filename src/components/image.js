import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ItemTypes from './ItemTypes';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const imageSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const imageTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Get horizontal middle
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    // Get pixels to the left
    const hoverClientX = clientOffset.x - hoverBoundingRect.left;


    props.moveImage(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

class Image extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    src: PropTypes.string.isRequired,
    moveImage: PropTypes.func.isRequired
  };

  render() {
    const { src, isDragging, connectDragSource, connectDropTarget, id } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div className='col-sm-4 single-item' key={id}>
        <img src={src} width="200px" height="200px" />
      </div>
      
    ));
  }
}

export default flow(
  DropTarget(ItemTypes.IMAGE, imageTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource(ItemTypes.IMAGE, imageSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
)(Image);