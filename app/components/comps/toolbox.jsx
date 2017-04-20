import React,{PropTypes,Component} from 'react';
import Pencil from './tools/pencil.jsx';
import Eraser from './tools/eraser.jsx';

export default class ToolBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pencil: this.props.pencil,
      eraser: this.props.eraser
    }
  }

  handleToolToggle(tool) {
    this.setState({
      [tool]: !this.state[tool]   // flip true -> false etc.
    });
  }

  render(){
    return (
        <div className="tool-box">
          <Pencil onToggle={this.handleToolToggle.bind(this, "pencil")} isActive={this.state.pencil} />
          <Eraser onToggle={this.handleToolToggle.bind(this, "eraser")} isActive={this.state.eraser} />
        </div>
     );
  }
}
