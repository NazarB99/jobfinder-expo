import React,{Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {loginFacebook} from "../actions/authAction";

class AuthScreens extends Component{
    componentDidMount(){
        this.props.loginFacebook();
    }

    componentWillReceiveProps(nextProps){
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props){
        console.log(props);
        if (props.auth.token){
            this.props.navigation.navigate('map');
        }
    }

    render(){
        return(
            <View/>
        )
    }
}

const mapStateToProps = state => ({
   auth:state.auth
});

export default connect(mapStateToProps,{loginFacebook})(AuthScreens);