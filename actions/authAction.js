import {GOOGLE_LOGIN_SUCCESS} from "./types";
import {AsyncStorage} from 'react-native';

export const loginGoogle = () => async dispatch => {
    console.log("Login");
    let token = await AsyncStorage.getItem('g_token');
    if(token) {

    }
    else{

    }
};