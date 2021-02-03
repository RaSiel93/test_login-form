import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Redirect } from 'react-router-dom';
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: { email: 'aewf@mail.by', password: 'faewEF213' }, errors: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(event) {
    let fields = this.state.fields;
    const target = event.target;

    fields[target.name] = target.value;
    this.setState({fields})
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

    return isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.handleValidation()) {
      window.localStorage.setItem('email', this.state.fields['email']);
      this.props.login();
    }
  }

  render() {
    return !this.props.logged
      ? <div className='login'>
          <form>
            <label>
              <input className={ this.state.errors['email'] ? 'error' : '' } type='email' name='email' placeholder='Email' value={this.state.fields.email} onChange={this.handleChange}/>
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            </label>
            <label>
              <input className={ this.state.errors['password'] ? 'error' : '' } type='password' name='password' placeholder='Пароль' value={this.state.fields.password} onChange={this.handleChange}/>
              <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
            </label>
            <button onClick={this.handleSubmit}>Увайсці</button>
          </form>
        </div>
      : <Redirect to="/" />
  }
}
