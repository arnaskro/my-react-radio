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
              _selectRadio={() => {
                // Set loading to fire the loading animation
                this.props.setLoading();
                setTimeout(() => this.props.changeRadio(radio), 100);
              }}
            /> )}
        </ul>
      </div>
    )
  }
} 

const mapToProps = ({ active, list }) => ({ active, list });

export default connect(mapToProps, actions)(RadioList);