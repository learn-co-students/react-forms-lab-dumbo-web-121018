import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault()
        return this.props.onSubmit
      }}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
