import React from 'react';
import './App.css';
import Chatbox from './components/Chatbox';

class App extends React.Component {
  constructor(props); {
    super(props);
    this.state = {
      term: []
    };
  }
}

onChange = (event) => {
  this.setState({ term: event.target.value });
}

render(){
return (
  <div className="app">
    <h1>Chat app</h1>
    <Chatbox item={this.state.items} />
    <form className="message-from" onSubmit={this.onSubmit}>
      <input value={this.state.term} onCharge={this.onChange} />
      <button>Send</button>
  </div>
);
}
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
