import React, {Component} from 'react'
import List from './List'

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = { dragItem: null };
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
  }

  render() {
    const lists = this.props.lists.map((list) =>
      <List key={list.id} title={list.title} items={list.items} actions={list.actions} onDrag={this.drag} onDrop={this.drop}/>
    );

    return (
      <section className='table'>
        {lists}
      </section>
    );
  }

  drag(item) {
    this.setState({ dragItem: item });
  }

  drop(list) {
    list.addItem(this.state.dragItem);
    this.state.dragItem.destroy();
    this.setState({ dragItem: null });
  }
}

export default Lists