import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';

import Modal from "./components/Modal";
import Timeslots from './components/Timeslots';

import store from './store';

class App extends Component {
  componentDidMount() {
    window.M.AutoInit();
  }

  render() {
    return (
      <Provider store={store}>
        <header>
          <h2>Thank you for selecting our service!</h2>
          <p>Please select an available timeslot for your appointment.</p>
        </header>
        <main>
          <Modal />
          <Timeslots />
        </main>
      </Provider>
    );
  }
}

export default App;
