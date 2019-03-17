import React,{Component} from 'react';
import Slides from '../components/Slides';
import {AsyncStorage,View} from 'react-native';
import {AppLoading} from 'expo';

const SLIDES_DATA = [
    {text:'Welcome to Job Finder', color: '#03A9F4'},
    {text:'Use this to get a job',color: '#009688'},
    {text:'Set your location, then swipe away',color: '#03A9F4'}
];

class WelcomeScreens extends Component{
    constructor(){
        super();
        this.state={
            token:null
        }
    }

    async componentWillMount(){
        let fb_token = await AsyncStorage.getItem('fb_token');
        if(fb_token){
            this.setState({token:true});
            this.props.navigation.navigate('map');
        }
        else{
            this.setState({token:false})
        }
    }

    onTutorialComplete = () =>{
        this.props.navigation.navigate('auth');
    };

    renderWelcome = () =>{
        console.log(this.props.navigation.state.routeName);
        if(this.state.token === null){
            return(
                <AppLoading/>
            )
        }
        else if (this.state.token === false) {
            console.log('false');
            return(
                <Slides data={SLIDES_DATA} onTutorialComplete={this.onTutorialComplete} />
            )
        }
    };

    render(){
        return(
            <View style={{flex:1}}>
                {this.renderWelcome()}
            </View>
        )
    }
}

export default WelcomeScreens;