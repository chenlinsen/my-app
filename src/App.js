import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./Component/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
  }
  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>Modal Dialog</Modal>
        )}
      </div>
    );
  }
}

export default App;
