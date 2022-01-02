import React, { Component } from "react";
import axios from "axios";



class Actors extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [],
    };
}

componentDidMount() {
    axios.get('http://localhost:3000/actors')
        .then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data.quoteArray,
            });
        })
        .catch((error) => {
            console.log('problem with api', error);
        })
}

displayActors() {
    const display = this.state.data.map((a, idx) => {
        return <Actors
            key={idx}
            url={a.url}
            actor={a.actor}
            born={a.born}
            work={a.work}
            image_url={a.image_url}
            bio={a.bio}
        />
    });
    console.log(this.state.data);
    return display;
}

render() {
    return (
        <div>
          <h1>Actors</h1>
          <h2>{this.displayActors()}</h2>
        </div>
      );
    }
  }

export default Actors;