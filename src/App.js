import React, { Component } from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Reviews from "./Reviews";
import Review from "./Review1";


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm">
              <img
                className="container-fluid"
                src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scan034_9a3642e0-7cc1-49b5-a774-f6dc0bdde546_480x.progressive.jpg?v=1678290211"
                alt="guardians"
              ></img>

              <Review />
            </div>
            <div class="col-sm">
              <img
                className="container-fluid"
                src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/creed.a_480x.progressive.jpg?v=1667944905"
                alt="avengers"
              ></img>
              <Review />
            </div>
            <div class="col-sm">
              <img
                className="container-fluid"
                src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/55cea2691f42048d74ea7a4f39b7afa1_480x.progressive.jpg?v=1573572639"
                alt="NoCountry"
              ></img>
              <Review />
            </div>
            <div class="col-sm">
            <img
                className="container-fluid"
                src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avatar.adv_480x.progressive.jpg?v=1670962973"
                alt="NoCountry"
              ></img>
              <Review />
            </div>
            <div class="col-sm">
            <img
                className="container-fluid"
                src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9fcc8387e9d47ab5af4318d7183f6d2b_19f7e1e1-3941-4c27-bad1-1f6dd70f35e0_480x.progressive.jpg?v=1573587594"
                alt="NoCountry"
              ></img>
              <Review />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
