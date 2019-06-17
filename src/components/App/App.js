import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Feeling from '../Feeling/Feeling';
import Content from '../Content/Content';
import Support from '../Support/Support';
import ThankYou from '../ThankYou/ThankYou';
import Header from '../Header/Header';
import Review from '../Review/Review';
import './App.css';

class App extends Component {
  render() {
    return  (
      <Router >
        <div className="App">
          <Header />
            <br />
            <Route path="/" exact={true} component={Feeling} />
            <Route path="/2" component={Content} />
            <Route path="/3" component={Support} />
            <Route path="/4" component={Comment} />
            <Route path="/5" component={Review} />
            <Route path="/6" component={ThankYou} />
          </div>
        </Router>
        );
      }
    }

export default App;
      
      