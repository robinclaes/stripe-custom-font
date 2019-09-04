import React, { Fragment } from "react";
import logo from "./logo.svg";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  StripeProvider,
  Elements
} from "react-stripe-elements";
import "./App.css";

const options = {
  base: {
    fontFamily: "customFont",
    fontSize: "18px",
    fontSmoothing: "antialiased",
    letterSpacing: "0.025em"
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <StripeProvider apiKey="123456789">
        <Elements
          fonts={[
            {
              src: `${process.env.PUBLIC_URL}/font.ttf`,
              family: "customFont"
            }
          ]}
        >
          <Fragment>
            <CardNumberElement style={options} onChange={() => null} />
            <CardExpiryElement style={options} onChange={() => null} />
            <CardCVCElement style={options} onChange={() => null} />
          </Fragment>
        </Elements>
      </StripeProvider>
    </div>
  );
}

export default App;
