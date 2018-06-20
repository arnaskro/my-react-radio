import React from 'react';
import Sound from 'react-sound';
import { connect } from "redux-zero/react";
import actions from "./actions";
import RadioList from './RadioList';
import ControlBar from './ControlBar';
import Header from './Header';

class Radio extends React.Component {

  soundPlayer() {
    if (this.props.active !== null) 
      return <Sound
          url={this.props.active.url}
          volume={this.props.volume}
          playStatus={(this.props.playing || this.props.loading) ? Sound.status.PLAYING : Sound.status.PAUSED}
          onPlaying={() => this.props.loading && !this.props.playing ? this.props.setPlaying() : ""}
          onBufferChange={() => console.log("hey")}
        />
  }

  render() {
    return (
      <div className="Radio">
        <Header />
        <RadioList />
        <ControlBar />
        {this.soundPlayer()}
      </div>
    )
  }
} 

const mapToProps = ({ active, playing, loading, list, volume }) => ({ active, playing, loading, list, volume });

export default connect(mapToProps, actions)(Radio);