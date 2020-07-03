import React, { Component } from "react";
import axios from "axios";
export default class Butgel extends Component {
  state = {
    fistname: null,
    lastname: null,
    phone: null,
    email: null,
    address: null,
    error: null
  };
  handleType = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: null
    });
  };
  handleClick = e => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/v1/crud", {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address
      })
      .then(results => {
        this.props.onLogin(results);
      })
      .catch(err => this.state({ error: err.response.data.data }));
  };
  handleUstgah = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: null,
      error: null
    });
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <div className="p-3 mb-2 bg-warning text-dark">
            {this.state.error}
          </div>
        )}
        <div className="App">
          <div className="container">
            <div className="row">
              <form className="mt-4">
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-4 col-form-label">
                    Овог
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="colObog"
                      name="lastname"
                      onChange={this.handleType}
                      required
                      placeholder="Та өөрийн овгийг оруулна уу"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-4 col-form-label">
                    Нэр
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="colNer"
                      name="firstname"
                      onChange={this.handleType}
                      required
                      placeholder="Та өөрийн нэрийг оруулна уу"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-6 col-form-label">
                    Утасны дугаар
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      id="colPhoneNumber"
                      name="phone"
                      onChange={this.handleType}
                      required
                      placeholder="Та өөрийн утасны дугаарыг оруулна уу"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-6 col-form-label">
                    И-Мэйл хаяг
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      id="colEmail"
                      name="email"
                      onChange={this.handleType}
                      required
                      placeholder="Та өөрийн и-мэйл хаягаа оруулна уу"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-6 col-form-label">
                    Гэрийн хаяг
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="colAddress"
                      name="address"
                      onChange={this.handleType}
                      required
                      placeholder="Та гэрийн хаягаа оруулна уу"
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm btn-block"
                    onClick={this.handleClick}
                  >
                    Бүртгэх
                  </button>
                </div>
                <div className="col-sm-12 mt-2 ">
                  <button
                    type="button"
                    className="btn btn-success btn-sm btn-block"
                    onClick={this.handleUstgah}
                  >
                    Устгах
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
