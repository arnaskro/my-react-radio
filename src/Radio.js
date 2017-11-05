import React from 'react';
import Sound from 'react-sound';
import { connect } from "redux-zero/react";
import actions from "./actions";
import RadioList from './RadioList';
import ControlBar from './ControlBar';

class Radio extends React.Component {

  soundPlayer() {
    if (this.props.active !== null) 
      return <Sound
          url={this.props.active.url}
          playStatus={(this.props.playing || this.props.loading) ? Sound.status.PLAYING : Sound.status.PAUSED}
          onPlaying={() => this.props.loading && !this.props.playing ? this.props.setPlaying() : ""}
        />
  }

  render() {
    return (
      <div className="Radio">
        <RadioList />
        <ControlBar />
        {this.soundPlayer()}
      </div>
    )
  }
} 

const mapToProps = ({ active, playing, loading, list }) => ({ active, playing, loading, list });

export default connect(mapToProps, actions)(Radio);