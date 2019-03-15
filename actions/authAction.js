import {FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS, GOOGLE_LOGIN_SUCCESS} from "./types";
import {AsyncStorage} from 'react-native';
import {Facebook} from 'expo';

export const loginFacebook = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        dispatch({
            type:FACEBOOK_LOGIN_SUCCESS,
            payload:token
        })
    }
    else {
        doFacebookLogin(dispatch)
    }
};

const doFacebookLogin = async dispatch => {
    let{type,token} = await Facebook.logInWithReadPermissionsAsync('300876307222860',{
        permissions:['public_profile']
    });
    
    if (type === 'success'){
        await AsyncStorage.setItem('fb_token',token);
        dispatch({
            type:FACEBOOK_LOGIN_SUCCESS,
            payload:token
        })
    }
    else{
        dispatch({
            type:FACEBOOK_LOGIN_FAIL
        })
    }
    
};