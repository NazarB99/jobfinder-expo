import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Button} from 'react-native-elements';

class ReviewScreens extends Component{
    static navigationOptions = ({navigation}) => ({
        title:'Review jobs',
        headerRight:(
            <Button
                title="Settings"
                onPress={() => navigation.navigate('settings')}
                type="clear"
            />
        )
    });

    render(){
        return(
            <View>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
            </View>
        )
    }
}

// 1. Clear watchman watches: `watchman watch-del-all`.
// 2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
// 3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.
// 4. Remove haste cache: `rm -rf /tmp/haste-map-react-native-packager-*`

export default ReviewScreens;