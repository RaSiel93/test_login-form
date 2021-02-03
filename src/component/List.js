import React, {Component} from 'react'
import Item from './Item'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items, newValue: '' }

    this.drop = this.drop.bind(this);
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const listItems = this.state.items.map((item) =>
      <Item key={item.id} value={item.value} onDestroy={this.destroy.bind(this, item)} onDrag={this.drag.bind(this, item)}/>
    );

    return (
      <div className='ready'>
        <h1>{this.props.title}</h1>
          {this.props.actions && (
            <li className='actions'>
              <input className='value' value={this.state.newValue} onChange={this.handleChange}></input>
              <button className='add' onClick={this.add}>Дадаць</button>
            </li>
          )}
          <ul className='ready--list' onDrop={this.drop} onDragOver={this.allowDrop}>
            {listItems}
          </ul>
      </div>
    );
  }

  add(event) {
    console.log(this.state.items);

    this.state.items.push({ id: Math.random(), value: this.state.newValue });
    this.setState({ newValue: '' });
  }

  addItem(item) {
    this.state.items.push(item);
    console.log(this.state.items);
  }

  destroy(item) {
    const filteredItems = this.state.items.filter(function (candidate) {
      return (candidate !== item);
    });

    this.setState({ items: filteredItems });
  }

  handleChange(event) {
    this.setState({ newValue: event.target.value });
  }

  drag(item) {
    item.destroy = this.destroy.bind(this, item);
    this.props.onDrag(item)
  }

  drop() {
    this.props.onDrop(this)
  }

  allowDrop(event) {
    event.preventDefault();
  }
}

export default List