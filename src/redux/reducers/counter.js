import { INCREMENT_NUM, DECREMENT_NUM, RESET } from '../constants/ActionTypes';

const defaultVal = {
	counter_one: 0,
	counter_two: 0,
	updates: 0
};

export default function reducer (state = defaultVal, action){
	switch (action.type) {
		case INCREMENT_NUM:
			return {
				counter_one: state.counter_one + action.payload,
				counter_two: state.counter_two - action.payload,
				updates: state.updates + 1
			};
		case DECREMENT_NUM:
			return {
				counter_one: state.counter_one - action.payload,
				counter_two: state.counter_two + action.payload,
				updates: state.updates + 1
			};
		case RESET:
			return (state = defaultVal);
	}

	return state;
}
