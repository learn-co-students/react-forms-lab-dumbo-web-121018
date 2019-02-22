import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // value: ""
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      // value: event.target.value
      username: event.target.value,
      password: event.target.value
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
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
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
