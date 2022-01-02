import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

// Components
import Top from "./components/Top"
import ActorsContainer from "./components/ActorsContainer";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<ActorsContainer />} />
            <Route path="/top" element={<Top />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<Tvshows />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
