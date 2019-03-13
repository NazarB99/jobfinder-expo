import {GOOGLE_LOGIN_SUCCESS} from "../actions/types";

const initialState = {
    token:'',
    name:''
};

export default function (state = initialState,action) {
    switch (action.type){
        case GOOGLE_LOGIN_SUCCESS:
            return{
                ...state,
                token:action.payload.text
            };
        default:
            return{
                ...state
            }
    }
}