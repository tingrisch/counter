import * as types from "../constans/counterActionTypes";

export const incremented = () => {
    return {
        type: types.INCREMENT
    };
};

export const decremented = () => {
    return {
        type: types.DECREMENT
    };
};