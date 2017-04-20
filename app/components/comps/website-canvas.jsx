import React,{PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';

export default class WebsiteCanvas extends Component {
  componentDidMount() {
    //console.log(fabric,canvas);
    //let cn = document.getElementById('draw');
    let canvas = ReactDOM.findDOMNode(this);
    console.log(canvas,"canvas")
    var ctx = canvas.getContext('2d');

    var mouse = {x: 0, y: 0};

    canvas.addEventListener('mousemove', function(e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop - 100;
    }, false);

    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#00CC99';

    canvas.addEventListener('mousedown', function(e) {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);

        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

    var onPaint = function() {
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    };
    console.log(this);
  }
  render() {
    return (
      <canvas id="draw" width="1000" height="720"></canvas>
    )
  }
}
