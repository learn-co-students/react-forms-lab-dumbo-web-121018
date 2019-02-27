import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  changeHandler = (event) =>{
    // console.log(this.state.username)
    // console.log(this.state.password)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) =>{
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== ""){
      console.log(this.state.username)
      console.log(this.state.password)
    }
    else{
      console.log("username or password is empty")
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.changeHandler} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changeHandler} value={this.state.password}  />
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
