import { CHANGE_AMOUNT } from '../constants/ActionTypes';

const defaultVal = 1;

export default function reducer (state = defaultVal, action){
	switch (action.type) {
		case CHANGE_AMOUNT:
			return action.payload;
	}

	return state;
}
