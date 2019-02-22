import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      // get the current length of the input
      length: 0
    };
  }

  messageLength = event => {
    this.setState({length: event.target.value.length})
    console.log((this.props.maxChars) - (this.state.length))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.messageLength} />
      </div>
    );
  }
}

export default TwitterMessage;
