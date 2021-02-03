import {Component} from 'react'
import Lists from './Lists'
import fixtures from '../fixtures'
import './Todo.css'

export default class Todo extends Component {
  render() {
    return (
      <Lists key={Math.random()} lists={fixtures}/>
    )
  }
}
