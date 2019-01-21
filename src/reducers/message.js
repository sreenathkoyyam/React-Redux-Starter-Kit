import { SET_MESSAGE } from '../types/applicationTypes';
const initState = {
	message: 'Enter Your Name'
}

const message = (state = initState, action) => {

	switch(action.type) {
		case SET_MESSAGE :
			return {...state, message: action.payload.message}
		default :
			return state
	}

}

export default message;