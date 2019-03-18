import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {MapView} from 'expo';
import {getJobs} from '../actions/jobActions';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';

class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
            latitude: 37,
            longitude: -122,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09,
        }
    };

    componentDidMount() {
        this.setState({mapLoaded: true});
    }

    onGestureComplete = (region) => {
        this.props.getJobs(region);
    };

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{flex: 1}}>
                    <ActivityIndicator style={{alignSelf: 'center'}} size="large"/>
                </View>

            )
        }
        return (
            <View style={{flex: 1}}>
                <MapView region={this.state.region} style={{flex: 1}} onRegionChangeComplete={region => this.onGestureComplete(region)}/>
                <View style={style.buttonContainer}>
                    <Button large icon={{name:'search'}} backgroundColor="#009688" title="Search Jobs Here"/>
                </View>
            </View>
        )
    }
}

const style ={
    buttonContainer:{
        position:'absolute',
        bottom:"20",
        left:"0",
        right:"0"
    }
};

export default connect(null, {getJobs})(MapScreen);