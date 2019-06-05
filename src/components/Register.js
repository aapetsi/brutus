import React from "react";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
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
      console.log(errorState);
      this.setState({ errors: {} });
      alert("success");
    } else {
      alert("provide your info");
    }
  };

  handleFormValid = () => {
    let errors = this.state.errors;
    let errorValues = Object.values(errors);
    if (errorValues.length === 0) {
      return false;
    } else {
      errorValues.every(error => {
        return error === "";
      });
    }
  };

  onClick = e => {
    let password = this.state.password;

    // Password requirements
    const passwordUpperCase = /^[A-Z]{2,}/g;
    const passwordSymbols = /\W{2,}/;
    const passwordNumber = /\d{3,}/;
    const passwordLowerCase = /[a-z]/;

    // check for password
    let passwordRequired;
    let passwordLen;
    let passwordHasSymbol;
    let passwordHasLowerCase;
    let passwordHasUpperCase;
    let passwordHasNumber;
    if (!password) {
      passwordRequired = "Password field is required";
    } else {
      passwordRequired = "pass";
      passwordLen =
        password.length < 16
          ? "Password must be at least 16 characters"
          : "pass";
      passwordHasSymbol = !password.match(passwordSymbols)
        ? "Password must contain at least 2 symbols"
        : "pass";
      passwordHasLowerCase = !password.match(passwordLowerCase)
        ? "Password must contain lowercase"
        : "pass";
      passwordHasUpperCase = !password.match(passwordUpperCase)
        ? "Password must contain uppercase"
        : "pass";
      passwordHasNumber = !password.match(passwordNumber)
        ? "Password must contain 3 numbers"
        : "pass";
    }

    // check for email
    let email =
      this.state.email.length === 0 ? "email field is required" : "pass";

    this.setState({
      errors: {
        email,
        passwordLen,
        passwordRequired,
        passwordHasSymbol,
        passwordHasLowerCase,
        passwordHasUpperCase,
        passwordHasNumber
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            value={this.state.email}
            placeholder="email"
            type="email"
            name="email"
            onChange={e => this.handleUserInput(e)}
          />

          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={e => this.handleUserInput(e)}
          />
          <button type="button" onClick={this.onClick}>
            Validate
          </button>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    );
  }
}

export default Register;
