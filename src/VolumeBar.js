import React from 'react';
import { connect } from "redux-zero/react";
import actions from "./actions";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class VolumeBar extends React.Component {

  VolumeIcon() {
    if (this.props.volume === 0)
      return "fa fa-volume-off";
    else if(this.props.volume >= 70)
      return "fa fa-volume-up";
    else
      return "fa fa-volume-down"
  }

  render() {
    return (
      <div className="VolumeBar">
        <i className={this.VolumeIcon()} aria-hidden="true"></i>
        <Slider 
          defaultValue={this.props.volume} 
          onChange={(value) => this.props.changeVolume(value)}
          trackStyle={{ backgroundColor: '#3fbe8e', height: 7 }}
          handleStyle={{
            borderColor: 'white',
            borderWidth: 3,
            height: 24,
            width: 24,
            marginLeft: -14,
            marginTop: -9,
            backgroundColor: '#2f2f2f',
          }}
          railStyle={{ backgroundColor: '#e6e6e6', height: 7 }}
        />
      </div>
    )
  }
} 

const mapToProps = ({ volume }) => ({ volume });

export default connect(mapToProps, actions)(VolumeBar);