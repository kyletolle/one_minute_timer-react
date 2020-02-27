import React from 'react';
import { ResumeButtonProps } from './ResumeButtonProps';

export class ResumeButton extends React.Component<ResumeButtonProps> {
  render() {
    let styleAttrs = {
      marginLeft: 50,
      display: this.props.visible ? 'inline-block' : 'none'
    };
    return (<div style={styleAttrs}>
      <button style={{ fontSize: 50 }} onClick={this.props.handleClick}>
        Resume
        </button>
    </div>);
  }
}
