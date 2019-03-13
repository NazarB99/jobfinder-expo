import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import AuthScreens from "./screens/AuthScreens";
import WelcomeScreens from "./screens/WelcomeScreens";
import DeckScreen from "./screens/DeckScreen";
import MapScreen from "./screens/MapScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreens from "./screens/ReviewScreens";
import {connect} from 'react-redux'

const MainNavigator = createBottomTabNavigator({
    welcome: {screen: WelcomeScreens},
    auth: {screen: AuthScreens},
    main: {
        screen: createBottomTabNavigator({
            map: {screen:MapScreen},
            deck: {screen:DeckScreen},
            review: {
                screen: createStackNavigator({
                    review: {screen:ReviewScreens},
                    settings: {screen:SettingsScreen}
                })
            }
        })
    }
});

const MainContainer = createAppContainer(MainNavigator);

const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(mapStateToProps)(MainContainer);