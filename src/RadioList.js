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

                // Give time for loading animation
                setTimeout(() => {

                  // Check if the radio is already playing
                  if (this.props.active === radio)
                    this.props.changeRadio(this.props.list.filter((item) => item !== radio)[0]);

                  this.props.changeRadio(radio)
                }, 100);
              }}
            /> )}
        </ul>
      </div>
    )
  }
} 

const mapToProps = ({ active, list }) => ({ active, list });

export default connect(mapToProps, actions)(RadioList);