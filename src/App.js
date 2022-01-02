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
import Actors from "./components/Actors";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Actors />} />
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
