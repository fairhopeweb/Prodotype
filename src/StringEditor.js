import React from 'react';
import "@babel/polyfill"; import PropEditorBase from './PropEditorBase';

export default class StringEditor extends React.Component {
  render() {
    return <PropEditorBase onChange={this.props.onChange} data={this.props.data}>
      <input
        value={ this.props.data.value || '' }
        onChange={(e) => this.props.onChange(e.target.value)}
        readOnly={ this.props.data.readonly }
      />
    </PropEditorBase>;
  }
}
