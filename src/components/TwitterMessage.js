import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      textInput: ""
    };
  }

  handleChange = event => {
    this.setState({
      textInput: event.target.value,
      maxChars: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    console.log(this.state.maxChars);
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.textInput}/>
        <p>{this.state.maxChars} remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
