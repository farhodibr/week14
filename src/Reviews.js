import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Review from "./Review1";

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.setState(() =>
      this.state.allReviews.push({
        rating: this.props.list.rating,
        review: this.props.list.review,
      })
    );
  }

  render() {
    console.warn(this.props);
    console.warn(this.state.review);
    return (
      <div key={this.state.objectID}>
        <button
          className="btn btn-primary form-control"
          onClick={this.onSubmit}
        >
          Submit
        </button>

        <div>
          <div>
            {this.state.allReviews.map((movie, index) => {
              return (
                <div key={index}>
                  <p>
                    
                    {[...Array(5)].map((star, index1) => {
                      index1 += 1;
                      return (
                        <button
                          type="button"
                          key={index1}
                          className={index1 <= movie.rating ? "on" : "off"}
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                  </p>
                  <p>{movie.review}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
