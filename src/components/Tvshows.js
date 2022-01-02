import React, { Component } from "react";
import axios from "axios";




class Tvshows extends Component {

    constructor(props) {
      super(props);
      this.state = {
          data: [],
      };
  }
  
  componentDidMount() {
      axios.get('http://localhost:3000/tvshows')
          .then((response) => {
              console.log(response.data);
              this.setState({
                  data: response.data.tvshowsArray,
              });
          })
          .catch((error) => {
              console.log('problem with api', error);
          })
  }
  
  displayTvshows() {
      const display = this.state.data.map((a, idx) => {
          return <Tvshows
              key={idx}
              url={a.url}
              title={a.title}
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
            <h1>TV Shows</h1>
            <h2>{this.displayTvshows()}</h2>
          </div>
        );
      }
    }

export default Tvshows;