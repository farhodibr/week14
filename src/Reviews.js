import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() { 
    this.setState( () =>
      this.state.allReviews.push({
        rating: this.props.list.rating,
        review: this.props.list.review
      })
    );
  //this.setState( () => this.state.allReviews.pop());
   console.log(this.state.allReviews)
  }

  render() {
    console.warn(this.props);
    console.warn(this.state.review);
    return (
      <div className="container-fluid" key={this.state.objectID}>
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
                    {[...Array(5)].map((star, indexStar) => {
                      indexStar += 1;
                      return (
                        <button
                          type="button"
                          key={indexStar}
                          className={indexStar <= movie.rating ? "on" : "off"}
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                  </p>
                  <p className="paragraph">{movie.review}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
