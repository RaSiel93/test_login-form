import {Component} from 'react'
import './Clock.css';

let canvas = document.querySelector('canvas');
let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');

const R = 195;
const CENTER_X = 200;
const CENTER_Y = 200;

export default class Clock extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    canvas = document.querySelector('canvas');
    second = document.querySelector('.second');
    minute = document.querySelector('.minute');
    hour = document.querySelector('.hour');

    this.drawClock();

    this.updateTime();
    setInterval(this.updateTime, 10);
  }


  toRadians(degree) {
    return degree / 180 * Math.PI;
  }

  drawClock() {
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.strokeStyle = 'rgb(255, 255, 255)';

    // circle
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, R + 4, 0, 2 * Math.PI);
    ctx.stroke();

    // circle 2
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, R - 4, 0, 2 * Math.PI);
    ctx.stroke();

    // seconds
    ctx.lineWidth = 1;
    for(let i = 0; i < 360; i++) {
      let degree = i;

      ctx.beginPath();
      ctx.moveTo(CENTER_X - R * Math.cos(this.toRadians(degree)), CENTER_Y - R * Math.sin(this.toRadians(degree)));
      ctx.lineTo(CENTER_X + R * Math.cos(this.toRadians(degree)), CENTER_Y + R * Math.sin(this.toRadians(degree)));
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, 190, 0, 2 * Math.PI);
    ctx.fill();

    // minutes
    ctx.lineWidth = 3;
    for(let i = 0; i < 60; i++) {
      let degree = i * 6;

      ctx.beginPath();
      ctx.moveTo(CENTER_X - R * Math.cos(this.toRadians(degree)), CENTER_Y - R * Math.sin(this.toRadians(degree)));
      ctx.lineTo(CENTER_X + R * Math.cos(this.toRadians(degree)), CENTER_Y + R * Math.sin(this.toRadians(degree)));
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, 185, 0, 2 * Math.PI);
    ctx.fill();

    // hours
    ctx.lineWidth = 5;
    for(let i = 0; i < 6; i++) {
      let degree = i * 30;

      ctx.beginPath();
      ctx.moveTo(CENTER_X - R * Math.cos(this.toRadians(degree)), CENTER_Y - R * Math.sin(this.toRadians(degree)));
      ctx.lineTo(CENTER_X + R * Math.cos(this.toRadians(degree)), CENTER_Y + R * Math.sin(this.toRadians(degree)));
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, 180, 0, 2 * Math.PI);
    ctx.fill();

    // circle
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  updateTime() {
    let time = new Date();

    const seconds = time.getSeconds() + time.getMilliseconds() / 1000;
    const minutes = time.getMinutes() + seconds / 60;
    const hours = (time.getHours() % 12) + minutes / 60;

    second.style.transform = `rotate(${seconds * 6}deg)`;
    minute.style.transform = `rotate(${minutes * 6}deg)`;
    hour.style.transform = `rotate(${hours * 30}deg)`;
  }

  render() {
    return <div className="clock-container">
        <div className="clock">
          <canvas height="400" width="400">
          </canvas>
          <div className='hour'></div>
          <div className='minute'></div>
          <div className='second'></div>
        </div>
      </div>
  }
}