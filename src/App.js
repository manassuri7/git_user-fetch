import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from "./components/actions/Actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getUserData();
  }
  render() {
    console.log("props: ", this.props);

    return (
      <div className="App">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
          <div>
            <img
              src={this.props.userData.avatar_url}
              alt={this.props.userData.login}
              width="100%"
              style={{ padding: "10px", borderRadius: "20px" }}
            />
          </div>
          <div className="text-left">
            <h3>{this.props.userData.name}</h3>
            <h4>{this.props.userData.login}</h4>
            <button style={{ width: "100%" }}>Follow</button>
            <p>{this.props.userData.bio}</p>
            <p>
              <i className="fa fa-users"></i> {this.props.userData.company}
            </p>
            <p>
              <i className="fa fa-map-marker"></i>{" "}
              {this.props.userData.location}
            </p>
            <p>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:supreetsingh.247@gmail.com?Subject=Hello%20again">
                supreetsingh.247@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 ">
          <ul className="nav nav-tabs pt-1">
            <li className="active">
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Repositories {this.props.userData.public_repos}</a>
            </li>
            <li>
              <a href="#">Projects {this.props.userData.public_gists}</a>
            </li>
            <li>
              <a href="#">Stars {this.props.userData.public_repos}</a>
            </li>
            <li>
              <a href="#">Followers {this.props.userData.followers}</a>
            </li>
            <li>
              <a href="#">Following {this.props.userData.following}</a>
            </li>
          </ul>
          <h4 className="text-left pt-5">Popular repositories</h4>
          {this.props.newList.map(repo => {
            return (
              <div
                className="col-sm-6"
                style={{ padding: "5px" }}
                key={Math.random()}
              >
                <div
                  className="card"
                  style={{
                    border: "1px solid lightgray",
                    padding: "5px 15px",
                    textAlign: "left",
                    minHeight: "120px",
                    maxHeight: "120px"
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="#">{repo.name}</a>
                    </h5>
                    <p className="card-text">{repo.description}</p>
                    {repo.language && (
                      <span>
                        <i className="fa fa-circle" /> {repo.language}
                      </span>
                    )}
                    {"   "}
                    {repo.stargazers_count > 0 && (
                      <span>
                        <i className="fa fa-star" /> {repo.stargazers_count}
                      </span>
                    )}
                    {"   "}
                    {repo.forks_count > 0 && (
                      <span>
                        <strong>Forks:</strong> {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newList: state.newList,
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(actionCreator.fetchUser());
    },
    getUserData: () => {
      dispatch(actionCreator.getUserData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
