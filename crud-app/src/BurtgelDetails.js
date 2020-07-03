import React, { Component } from "react";
import axios from "axios";
export default class BurtgelDetails extends Component {
  state = {
    firsname: null,
    lastname: null,
    phone: null,
    email: null,
    address: null,
    error: null,
    delete: null
  };
  handleType = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: null
    });
  };
  componentDidMount = () => {
    axios
      .put("http://localhost:8000/api/v1/crud/" + this.props.match.params.id)
      .then(results => this.setState({ ...results.data.data, error: null }))
      .catch(err => {
        this.setState({ error: err.response.data.data });
      });
  };
  goBack = () => {
    this.props.history.goBack();
  };
  hadnleUpdate = e => {
    e.preventDefault();
    this.setState({ success: null });
    axios
      .put("http://localhost:8000/api/v1/crud/" + this.props.match.params.id, {
        firsname: this.state.firsname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address
      })
      .then(results => {
        console.log(results);
        this.setState({
          ...results.data.data,
          error: null
        });
      })
      .catch(err => {
        console.log(err.response.statusText);
        this.setState({ error: err.response.statusText });
      });
  };
  hadnleDelete = e => {
    e.preventDefault();
    this.setState({ success: null });
    axios
      .delete("http://localhost:8000/api/v1/crud/" + this.props.match.params.id)
      .then(results => {
        console.log(results);
        this.setState({
          deleted: true
        });
      })
      .catch(err => {
        console.log(err.response.statusText);
        this.setState({ error: err.response.statusText });
      });
  };
  render() {
    if (this.state.deleted) {
      return <div className="btn btnd-danger">Амжилттай устгагдлаа...</div>;
    }
    return (
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
                    Value={this.state.lastname}
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
                    Value={this.state.firstname}
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
                    Value={this.state.phone}
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
                    Value={this.state.email}
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
                    Value={this.state.address}
                    onChange={this.handleType}
                    required
                    placeholder="Та гэрийн хаягаа оруулна уу"
                  />
                </div>
              </div>
              <div className="col-sm-12 mt-4">
                <button
                  type="button"
                  className="btn btn-danger btn-sm btn-block"
                  onClick={this.goBack}
                >
                  Буцах
                </button>
              </div>
              <div className="col-sm-12 mt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-block"
                  onClick={this.hadnleUpdate}
                >
                  Шинэчлэх
                </button>
              </div>
              <div className="col-sm-12 mt-2">
                <button
                  type="button"
                  className="btn btn-success btn-sm btn-block"
                  onClick={this.hadnleDelete}
                >
                  Устгах
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
