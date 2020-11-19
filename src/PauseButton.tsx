import React from 'react';
import PauseButtonProps from './PauseButtonProps';

export class PauseButton extends React.Component<PauseButtonProps> {
  render(): JSX.Element {
    const styleAttrs = {
      marginLeft: 50,
      display: this.props.visible ? 'inline-block' : 'none',
    };

    return (
      <div style={styleAttrs}>
        <button style={{ fontSize: 50 }} onClick={this.props.handleClick}>
          Pause
        </button>
      </div>
    );
  }
}
