import { CounterReducerActions, CounterReducerActionTypes } from '../Types/counterReducerTypes';
import { Dispatch } from 'redux';

export const increment = (amount: number) => {
  return (dispatch: Dispatch<CounterReducerActions>) => {
    dispatch({
      type: CounterReducerActionTypes.INCREMENT,
      shouldConfirm: true,
      payload: amount,
    });
  };
};

export const decrement = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CounterReducerActionTypes.DECREMENT,
      shouldConfirm: true,
      payload: amount,
    });
  };
};
