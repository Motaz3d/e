import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from '/components/About';
import { BrowserRouter as Router, Route, Link, Swich} from 'react-router-dom';
class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

          </nav>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </Router>

    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
