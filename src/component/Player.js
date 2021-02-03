import {Component} from 'react'
import './Player.css'

export default class Player extends Component {
  render() {
    return <div className='video'>
      <link href="https://vjs.zencdn.net/7.10.2/video-js.css" rel="stylesheet" />
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
      >
        <source src="video.mp4" type="video/mp4" />
        <source src="MY_VIDEO.webm" type="video/webm" />
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
        </p>
      </video>

      <script src="https://vjs.zencdn.net/7.10.2/video.min.js"></script>
    </div>
  }
}