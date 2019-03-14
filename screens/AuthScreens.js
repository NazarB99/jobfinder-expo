import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import {loginFacebook} from "../actions/authAction";

class AuthScreens extends Component{
    componentDidMount(){
        this.props.loginFacebook();
    }

    render(){
        return(
            <View>
                <Text>Auth</Text>
            </View>
        )
    }
}

export default connect(null,{loginFacebook})(AuthScreens);