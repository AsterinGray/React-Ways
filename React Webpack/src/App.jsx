import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  render() {
    return (
      <div>
        <h2>React Using Webpack</h2>
        <p>This page demonstrate using React with webpack as bundler</p>

        <div>
          {this.state.liked ? (
            "You liked this."
          ) : (
            <button onClick={() => this.setState({ liked: true })}>Like</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
