import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { name, phone } = this.state;
    const slotInfo = {
      name,
      phone
    }

    console.log(slotInfo);
  }

  render() {
    return (
      <div id="editInfo" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>Please enter your name and phone number.</p>
          <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="validate"
                  value={this.state.name}
                  onChange={this.onChange} />
                <label htmlFor="name">First Name</label>
              </div>
              <div className="input-field">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="validate"
                  value={this.state.phone}
                  onChange={this.onChange} />
                <label htmlFor="phone">Telephone</label>
              </div>
              <button type="submit" className="btn modal-close waves-effect waves-blue blue lighten-1">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;