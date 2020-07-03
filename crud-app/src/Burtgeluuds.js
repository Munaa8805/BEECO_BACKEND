import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Burtgeluuds extends Component {
  state = {
    burtgel: []
  };
  componentDidMount = () => {
    axios
      .get("http://localhost:8000/api/v1/crud")
      .then(result => this.setState({ burtgel: result.data.data }))
      .catch(err => console.log(err.response));
  };
  render() {
    // console.log(this.state.burtgel);
    return (
      <div className="container">
        <div className="row">
          <h3>Энэ талбарт бүх бүртгэлүүд гарна</h3>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>

                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.burtgel.map(el => (
                <tr>
                  <td>{el._id}</td>
                  <td>{el.firstname}</td>
                  <td>{el.lastname}</td>
                  <td>{el.phone}</td>
                  <td>{el.email}</td>
                  <td>{el.address}</td>
                  <td>
                    <Link to={`/crud/${el._id}`}>
                      <a
                        href="#"
                        className="btn btn-success btn-sm active"
                        role="button"
                        aria-pressed="true"
                      >
                        Edit
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
