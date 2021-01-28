import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <h1>Прывітанне, {localStorage.getItem('email')}!</h1>
    )
  }
}

export default Home;
