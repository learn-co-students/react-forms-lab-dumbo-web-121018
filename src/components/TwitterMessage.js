import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      counter: 0
    };
  }

  changer(e) {
    this.setState({
      value: e.target.value
    })
  }

  counter() {
    this.setState({
      counter: this.state.value.length
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={e => {this.changer(e); this.counter()}}/>
        <h3>Remaining characters:{this.props.maxChars - this.state.counter}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
