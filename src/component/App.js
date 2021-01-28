import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: { email: '', password: '' }, errors: {} };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmitted = this.handleFormSubmitted.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  render() {
    return (
      <div className='login'>
        <form>
          <label>
            <input className={ this.state.errors['email'] ? 'error' : '' } type='email' name='email' placeholder='Email' value={this.state.fields['email']} onChange={this.handleInputChange}/>
            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
          </label>
          <label>
            <input className={ this.state.errors['password'] ? 'error' : '' } type='password' name='password' placeholder='Password' value={this.state.fields['password']} onChange={this.handleInputChange}/>
            <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
          </label>
          <button onClick={this.handleFormSubmitted}>Увайсці</button>
        </form>
      </div>
    )
  }

  handleInputChange(event) {
    let fields = this.state.fields;
    const target = event.target;

    fields[target.name] = target.value;
    this.setState({fields})
    console.log(this.state)
  }

  handleValidation() {
    let isValid = true;
    let fields = this.state.fields;
    let errors = {};

    if(!fields['email'].match(/^\S+@\S+\.\S+$/g)){
      isValid = false;
      errors['email'] = 'Невалідны';
    }

    if(!fields['email']) {
      isValid = false;
      errors['email'] = 'Не можа быць пустым';
    }

    if(!fields['password'].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)){
      isValid = false;
      errors['password'] = 'Невалідны';
    }

    if(!fields['password']) {
      isValid = false;
      errors['password'] = 'Не можа быць пустым';
    }

    this.setState({ errors: errors });

    if (isValid) {
      window.localStorage.setItem('email', this.state.fields['email']);
    }

    return isValid;
  }

  handleFormSubmitted(event) {
    event.preventDefault();

    if(this.handleValidation()) {
      console.log('true')
      window.location.href = '/home'
    } else {
      console.log('false')
    }
  }
}
