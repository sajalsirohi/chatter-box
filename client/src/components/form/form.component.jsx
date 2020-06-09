import React from "react";

import "./form.styles.scss";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { joinUser } from "../../redux/join/join.action";

class JoiningForm extends React.Component {
  joiningDetails = {
    name: "",
    roomName: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, roomName } = this.joiningDetails;
    if (name && roomName) {
      this.props.joinUser(this.joiningDetails);
      this.props.history.push("/chat");
    } else alert("Please fill both the details");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.joiningDetails = {
      ...this.joiningDetails,
      [name]: value,
    };
  };

  render() {
    return (
      <div className="form-div">
        <h1 className='title'>Join Chat Room</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">Name</label>
          <input
            className="form-input"
            name="name"
            type="text"
            onChange={this.handleChange}
            placeholder="Sajal Sirohi"
            autoComplete="off"
            required
          />
          <label className="label">Room Name</label>
          <input
            className="form-input"
            name="roomName"
            type="text"
            onChange={this.handleChange}
            placeholder="Football"
            autoComplete="off"
            required
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  joinUser: (joiningDetails) => dispatch(joinUser(joiningDetails)),
});

export default withRouter(connect(null, mapDispatchToProps)(JoiningForm));
