import React from 'react';
import { StartButtonProps } from './StartButtonProps';

export class StartButton extends React.Component<StartButtonProps> {
  render() {
    return (<div style={{ display: 'inline-block' }}>
      <button style={{ fontSize: 50 }} onClick={this.props.handleClick}>
        Start
        </button>
    </div>);
  }
}
