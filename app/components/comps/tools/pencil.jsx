import React,{PropTypes,Component} from 'react';
import {conditionalRender} from './tools-helper.jsx';

export default class Pencil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strokeWidth: 2,
      color: 'black'
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      color: newProps.color
    })
  }
  render() {
    return conditionalRender(this.props.isActive,'pencil',this.props.onToggle)
  }
}
