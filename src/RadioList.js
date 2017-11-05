import React from 'react';
import { connect } from "redux-zero/react";
import actions from "./actions";
import RadioListItem from './RadioListItem';

class RadioList extends React.Component {
  render() {
    
    return (
      <div className="RadioList">
        <ul>
          {this.props.list.map((radio, index) => 
            <RadioListItem {...radio} key={index} 
              _selectRadio={() => this.props.changeRadio(radio)}
            /> )}
        </ul>
      </div>
    )
  }
} 

const mapToProps = ({ active, list }) => ({ active, list });

export default connect(mapToProps, actions)(RadioList);