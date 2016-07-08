import axios from 'axios';
import {
	ADD_PICTURE,
	UPDATE_IMAGES,
	DELETE_IMAGE
} from './types';

const url = 'https://198.211.121.23:5000/v0';

export function uploadImage(image) {
	const data = new FormData();

	data.append('file', image, image.name);
	return function(dispatch) {
		axios.post(`${url}/upload`, data)
			.then(response => {
				console.log(response);
				dispatch({ type: ADD_PICTURE, payload:image});
			})
			.catch(() => {
				console.log('Error while uploading ');
			});
	};
}

export function updateImages(dragIndex,hoverIndex,dragImage) {
	let params = {
		dragIndex: dragIndex,
		hoverIndex: hoverIndex, 
		dragImage: dragImage
	};

	return {
		type: UPDATE_IMAGES,
		payload: params
	}
}

export function deleteImage(image) {
	return {
		type: DELETE_IMAGE,
		payload: image
	}
}