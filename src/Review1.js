import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Reviews from "./Reviews";

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: "",

      rating: 0,
    };

    console.log(this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveRating = this.saveRating.bind(this);
  }

  handleChange(event) {
    this.setState({ review: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
  }

  saveRating(index) {
    this.setState({ rating: index });
  }

  render() {
    return (
      <div className="left">
        <form className="form-control" onSubmit={this.handleSubmit}>
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
          <label>
            <br />
            Write your review
            <br />
            <textarea className="" type="text" onChange={this.handleChange} />
            <div></div>
          </label>
        </form>

        <Reviews list={this.state} />
      </div>
    );
  }
}
