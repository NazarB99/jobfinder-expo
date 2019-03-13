import React,{Component} from 'react';
import Slides from '../components/Slides';

const SLIDES_DATA = [
    {text:'Welcome to Job Finder', color: '#03A9F4'},
    {text:'Use this to get a job',color: '#009688'},
    {text:'Set your location, then swipe away',color: '#03A9F4'}
];

class WelcomeScreens extends Component{
    onTutorialComplete = () =>{
        this.props.navigation.navigate('auth');
    };

    render(){
        return(
            <Slides data={SLIDES_DATA} onTutorialComplete={this.onTutorialComplete} />
        )
    }
}

export default WelcomeScreens;