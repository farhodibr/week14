import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Review from "./Review1";
import Reviews from "./Reviews";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guardians: {
        objectID: 1,
        title: "Guardians of the Galaxy Vol. 2",
        year: "2017",
        rated: "PG-13",
        released: "05 May 2017",
        genre: "Action, Adventure, Comedy",
        actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      },
    };
  }

  render() {
    return(
      <Reviews movies={this.state} />
    );
  }
}
