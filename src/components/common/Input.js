import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

const Input=({label, value, onChangeText,placeholder, secureTextEntry})=>{

    const {inputStyle,labelStyle,containerStyle }=styles;

    return(


        <View style={containerStyle}>

            <Text style={labelStyle}>

                {label}

            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                underlineColorAndroid='transparent'
                style={inputStyle}
                value={value}
                autocorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText}

            />

        </View>

    );


};

const styles={

    inputStyle:{

        color:'#000',
        padding:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:3,

    },
    labelStyle:{

        fontSize:18,
        paddingLeft:20,
        flex:1

    },
    containerStyle:{

        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'

    }

};

export {Input};