import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import validator from "validator";

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
    redirect: false
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  onValidateInputs = () => {
    let name = validator.isEmpty(this.state.name + "")
      ? "name field is required"
      : "pass";

    let email = validator.isEmpty(this.state.email)
      ? "email is required and must be valid"
      : "pass";

    let password = validator.isEmpty(this.state.password)
      ? "password field is required"
      : "pass";

    let password2 = validator.isEmpty(this.state.password2)
      ? "confirm password field is required"
      : "pass";

    let passwordsMatch =
      this.state.password === this.state.password2
        ? "pass"
        : " both passwords must match";

    this.setState({
      errors: { name, email, password, password2, passwordsMatch }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let errors = Object.values(this.state.errors);
    let errorState;
    // check for errors
    if (errors.length === 0) {
      alert("provide your info");
    } else {
      errorState = errors.every(err => {
        return err === "pass";
      });
    }

    // reset error state
    if (errorState) {
      this.setState({ errors: {} });
      alert("success");
    } else {
      alert("provide your info");
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            value={this.state.name}
            type="text"
            placeholder="full name"
            onChange={this.handleUserInput}
          />
          <input
            name="email"
            value={this.state.email}
            type="email"
            placeholder="email"
            onChange={this.handleUserInput}
          />
          <input
            name="password"
            value={this.state.password}
            type="password"
            placeholder="password"
            onChange={this.handleUserInput}
          />
          <input
            name="password2"
            value={this.state.password2}
            type="password"
            placeholder="confirm password"
            onChange={this.handleUserInput}
          />
          {this.renderRedirect()}
          <button type="button" onClick={this.setRedirect}>
            I have an account
          </button>
          <button onClick={this.onValidateInputs} type="submit">
            Validate
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
