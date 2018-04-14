import React from 'react';
import { connect } from "redux-zero/react";
import actions from "./actions";
import VolumeBar from "./VolumeBar";

class ControlBar extends React.Component {
  
  ControlBarButtonClasses() {
    if (this.props.playing)
      return "paused";
    else if(this.props.loading)
      return "loading";
    else
      return "playing"
  }
  
  StatusIcon() {
    if (this.props.playing)
      return "fa fa-pause";
    else if(this.props.loading)
      return "fa fa-circle-o-notch fa-spin";
    else
      return "fa fa-play"
  }

  RadioStatus() {
    if (this.props.playing)
      return (
        <div>
          <div id='SoundWaves'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          Now playing
        </div>
      );
    else if(this.props.loading)
      return "Please wait...";
    else
      return "Paused"
  }

  render() {

    if (this.props.active === null) 
      return (
        <div className="ControlBar">
          <div className="RadioNotSelected">
            Please select a radio station
          </div>
        </div>
      )
    else
      return (
        <div className="ControlBar">
          <div className={`ControlBarButton ${this.ControlBarButtonClasses()}`} onClick={() => this.props.toggleRadio()}>
            <i className={this.StatusIcon()} aria-hidden="true"></i>
          </div>
          <div className="SelectedRadio">
            <div className="RadioStatus">
              {this.RadioStatus()}
            </div>
            <div className="ActiveRadio">
              {this.props.active.title}
            </div>
          </div>
          <VolumeBar />
        </div>
      )
  }
} 

const mapToProps = ({ active, playing, loading }) => ({ active, playing, loading });

export default connect(mapToProps, actions)(ControlBar);