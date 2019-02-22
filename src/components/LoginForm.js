import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const inputHandler = (e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
    }

    const validate = (e) => {
      e.preventDefault();
      if(this.state.username.length > 0 && this.state.password.length > 0) {
        this.props.onSubmit(this.state)
      }

    }

    return (
      <form onSubmit={(e)=>validate(e, this.state)}>
        <div>
          <label>
            Username
            <input onChange={inputHandler} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={inputHandler} id="password" name="password" type="password" value={this.state.password}/>
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
