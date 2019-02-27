import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars:140,
      text:""
    };
  }
  changeHandler = (event) =>{
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={this.changeHandler}/>
         Chars left: {this.state.maxChars-this.state.text.length}
      </div>
    );
  }
}

export default TwitterMessage;
