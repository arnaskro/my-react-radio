import React from 'react';

export default class RadioListItem extends React.Component {
  render() {
    return (
      <li className="RadioListItem" onClick={this.props._selectRadio}>
        {this.props.title}
      </li>
    )
  }
}