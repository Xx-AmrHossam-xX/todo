import { CHANGE_AMOUNT } from '../constants/ActionTypes';

export function changeAmount (payload){
	return {
		type: CHANGE_AMOUNT,
		payload: payload
	};
}
