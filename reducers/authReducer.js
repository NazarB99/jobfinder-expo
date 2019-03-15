import {FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS, GOOGLE_LOGIN_SUCCESS} from "../actions/types";

const initialState = {
    token:'',
    name:''
};

export default function (state = initialState,action) {
    switch (action.type){
        case FACEBOOK_LOGIN_SUCCESS:
            return{
                ...state,
                token:action.payload
            };
        case FACEBOOK_LOGIN_FAIL:
            return{
                ...state,
                token:null
            };
        default:
            return{
                ...state
            }
    }
}