import React, {Component} from "react";
import _ from 'lodash';
import {FlatList,View} from 'react-native';
import ListItem from "./ListItem";
import {connect} from "react-redux";
import {employeesFetch} from "../actions";
import {Card, CardSection} from "./common";

class EmployeeList extends Component{

  componentDidMount(){
    this.props.employeesFetch();    
  }

  renderRow({item}){

      return <ListItem employee={item}/>

  }

  render(){
    console.log(this.props)                    
    return(
      <View>
        <FlatList data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={(employee)=>employee.key.toString()}
        />
      </View>

    );

  }

}

const mapStateToProps=(state)=>{
  const employees = _.map(state.employeeList, (employee, uid) => ({
    ...employee,
    key: uid
  }));
  return {employees};
};

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);
