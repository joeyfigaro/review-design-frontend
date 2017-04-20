import React,{PropTypes,Component} from 'react';
import {conditionalRender} from './tools-helper.jx';

export default class SquareShape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strokeWidth: 2,
      width: 0,
      height: 0,
      color: 'black'
    }
  }
  resizeComponent(newSize) {
    this.setState({
      width: newSize.width,
      height: newSize.height
    })
  }
  componentWillRecieveProps(newProps) {
    this.setState({
      color: newProps.color
    })
  }
  render() {
    return conditionalRender(this.props.isActive,'square',this.props.onToggle)
  }
}
