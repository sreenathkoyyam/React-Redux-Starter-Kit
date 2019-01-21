import { SET_MESSAGE } from '../types/applicationTypes';

export const setMessage = (message) => {

	return dispatch => {

		dispatch({
			type: SET_MESSAGE,
			payload: {
				message
			}
		})

	}

}

