import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from "./common";
import {emailChanged,pwdChanged, loginUser} from "../actions";
import {connect} from "react-redux";

class LoginForm extends Component{

  onEmailChange(text){

    this.props.emailChanged(text);

  }

  onButtonsPress(){

    const {email,password}=this.props

    this.props.loginUser({email,password});

  }

  renderError(){

    if(this.props.error){
      return(
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
          </View>
        );
    }

  }

  renderButton(){

    if(this.props.loading){
      return <Spinner size='large'/>
    }
    return <Button onPress={this.onButtonsPress.bind(this)}>Log In</Button>
    
  }

  render(){
    return(

      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}/>
        </CardSection>
        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry
            onChangeText={(text)=>{this.props.pwdChanged(text)}}
            value={this.props.password}/>
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>

    );

  }
}

const styles={

  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red'
  }

}

const mapStateToProps=state=>{

  return {

    email: state.auth.email,
    password:state.auth.password,
    error: state.auth.error,
    loading:state.auth.loading

  };

};

export default connect(mapStateToProps,{emailChanged,pwdChanged,
  loginUser})(LoginForm);
