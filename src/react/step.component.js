import React from 'react'


export default class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: window.sharedState.messages
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage () {
    window.sharedState.messages.push(`Shared message ${new Date().getTime()}`);

    this.setState({messages: window.sharedState.messages});
  }

  render() {
    return (
      <div style={{marginTop: '10px'}}>
        <h1>This was written in React</h1>

        <p>
          <button onClick={this.sendMessage}>
            Add message to shared state
          </button>
        </p>

          {this.state.messages.map((itMessage, id) => <p key={id}>{itMessage}</p>)}
      </div>
    )
  }
}
