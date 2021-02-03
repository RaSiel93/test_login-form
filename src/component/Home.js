import { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <h1>Прывітанне, {localStorage.getItem('email')}!</h1>
    )
  }
}

export default Home;
