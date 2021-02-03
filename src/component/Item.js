import React, {Component} from 'react'

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li draggable="true" onDragStart={this.props.onDrag}>
        {this.props.value}
        <span className='remove' onClick={this.props.onDestroy}>x</span>
      </li>
    );
  }
}

export default Item