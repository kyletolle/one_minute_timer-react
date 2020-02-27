import React from 'react';
import { StopButtonProps } from './StopButtonProps';

export class StopButton extends React.Component<StopButtonProps> {
  render() {
    let styleAttrs = {
      marginLeft: 50,
      display: 'inline-block'
    };
    return (<div style={styleAttrs}>
      <button style={{ fontSize: 50 }} onClick={this.props.handleClick}>
        Stop
        </button>
    </div>);
  }
}
