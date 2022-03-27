import { ADD_TODO } from "./ActionTypes";

const initState = { todo:[] };

export const reducer = (state = initState, { type, payload }) => {
    
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todo:payload
            }
        
            default:
                return state;
    }
    
}