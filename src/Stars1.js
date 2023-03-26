import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Review from "./Review1";
import Reviews from "./Reviews";

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  postRating() {
    [...Array(5)].map((star, index) => {
      index += 1;
      return (
        <button
          type="button"
          key={index}
          className={
            index <= (this.state.hover || this.state.rating) ? "on" : "off"
          }
        >
          <span className="star">&#9733;</span>
        </button>
      );
    });
  }
  
  render() {
    return(
      <div>
      <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={
                    index <= (this.state.hover || this.state.rating)
                      ? "on"
                      : "off"
                  }
                  onClick={() => this.saveRating(index)}
                  onMouseEnter={() => this.setState({ hover: index })}
                  onMouseLeave={() => this.setState({ hover: 0 })}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
      <Review stars={this.state} />
      </div>
    );
  }
}
