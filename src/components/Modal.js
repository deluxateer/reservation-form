import React, { Component } from 'react'

class Modal extends Component {
  render() {
    return (
      <div id="editInfo" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>Please enter your name and phone number.</p>
          <div className="row">
            <form className="col s12">
              <div className="input-field">
                <input id="first-name" type="text" className="validate" />
                <label htmlFor="first-name">First Name</label>
              </div>
              <div className="input-field">
                <input id="telephone" type="tel" className="validate" />
                <label htmlFor="telephone">Telephone</label>
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