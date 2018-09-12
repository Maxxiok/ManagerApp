import React, {Component} from 'react';
import _ from "lodash";
import {text} from "react-native-communications";
import {Card, CardSection, Button, Confirm} from "./common";
import {connect} from 'react-redux';
import EmployeeForm from "./EmployeeForm";
import {employeeUpdate, employeeSave, deleteEmployee} from "../actions";

class EmployeeEdit extends Component{

    state={showModal:false};

    componentDidMount(){
        _.each(this.props.employee,(value,prop)=>{
            this.props.employeeUpdate({prop,value});
        });
    }

    onButtonPress(){
       const  {name,phone,shift}=this.props;
       this.props.employeeSave({name,phone,shift,uid:this.props.employee.key});
    }

    onTextPress(){
        const {phone,shift}=this.props;
        text(phone,`Your upcoming shift is on ${shift}`);
    }

    onAccept(){
        this.props.deleteEmployee({uid:this.props.employee.key});
    }

    onDecline(){
        this.setState({showModal:false});
    }

    render(){
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                    <Button onPress={()=>this.onTextPress()}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>this.setState({showModal:!this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={()=>this.onAccept()}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps=(state)=>{
    const {name,phone,shift}=state.employeeForm;
    return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate,employeeSave,deleteEmployee})(EmployeeEdit);