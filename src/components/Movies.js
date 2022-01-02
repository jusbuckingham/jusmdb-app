import React, { Component } from "react";
import axios from "axios";



class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [],
    };
}

componentDidMount() {
    axios.get('http://localhost:3000/movies')
        .then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data.moviesArray,
            });
        })
        .catch((error) => {
            console.log('problem with api', error);
        })
}

displayMovies() {
    const display = this.state.data.map((a, idx) => {
        return <Movies
            key={idx}
            url={a.url}
            movie={a.movie}
            director={a.director}
            cast={a.cast}
            music={a.music}
            run_time={a.run_time}
            img_url={a.img_url}
            summary={a.summary}
        />
    });
    console.log(this.state.data);
    return display;
}

render() {
    return (
        <div>
          <h1>Movies</h1>
          <h2>{this.displayMovies()}</h2>
        </div>
      );
    }
  }

export default Movies;