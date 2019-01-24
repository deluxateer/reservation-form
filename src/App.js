import React, { Component } from "react";
import "./App.css";

import Modal from "./components/Modal";
import Timeslots from './components/Timeslots';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h2>Thank you for selecting our service!</h2>
          <p>Please select an available timeslot for your appointment.</p>
        </header>
        <main>
          <Modal />
          <Timeslots />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
