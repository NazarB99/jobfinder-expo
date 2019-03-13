import React,{Component} from 'react';
import {View,Text,ScrollView,Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component{
    renderLastItem(index){
        if (index === this.props.data.length - 1){
            return(
                <Button title="Onwards!" raised containerStyle={styles.buttonStyle} onPress={this.props.onTutorialComplete}/>
            )
        }
    }

    renderSlides(){
        return this.props.data.map((slide,index) => {
            return(
                <View style={[styles.slide,{backgroundColor:slide.color}]} key={slide.text}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.renderLastItem(index)}
                </View>
            )
        })
    }

    render(){
       return(
           <ScrollView horizontal style={{flex:1}} pagingEnabled>
               {this.renderSlides()}
           </ScrollView>
       )
    }
}

const styles = {
    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:SCREEN_WIDTH
    },
    textStyle:{
        fontSize:30,
        color:'white',
        paddingLeft:15,
        paddingRight:15,
    },
    buttonStyle:{
        marginTop:20
    }
};

export default Slides;