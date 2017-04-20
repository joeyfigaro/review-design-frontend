import React,{PropTypes,Component} from 'react';
import {conditionalRender} from './tools-helper.jsx';

export default class Eraser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return conditionalRender(this.props.isActive,'eraser',this.props.onToggle)
  }
}
