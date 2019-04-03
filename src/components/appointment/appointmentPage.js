import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../navBar";
import Footer from "../footer";
import { connect } from "react-redux";
import { Modal, isEmpty, getTheme } from "../../common";
import Appointment from "./appointment";
import { fetchTheme } from "../../action/themes";
class AppointmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    };
  }
  onDismiss = () => {
    this.setState({
      alert: false
    });
  };
  componentDidMount() {
    if (isEmpty(this.props.theme.info)) {
      this.props.fetchTheme();
    }
  }
  componentDidUpdate() {
    const { isSent, isSending, error } = this.props.appointment;
    if (isSent || error) {
      if (!this.state.alert) {
        this.setState({
          alert: true
        });
      }
    }
  }
  render() {
    const { isSent, isSending, error } = this.props.appointment;
    const { info } = this.props.theme;
    const { backgroundStyle, linkStyle, navStyle, buttonStyle } = getTheme(
      info
    );
    let alertModal;
    if (isSent && !error & this.state.alert) {
      alertModal = (
        <Modal
          type="success"
          content="The Appointment was made successfully!"
          show={this.state.alert}
        />
      );
    } else if (error & this.state.alert) {
      alertModal = (
        <Modal
          type="error"
          content="The appointment cannot be made becuse of network or server problem"
          show={this.state.alert}
        />
      );
    }

    return (
      <div style={backgroundStyle}>
        <NavBar navStyle={navStyle} btnStyle={buttonStyle} />

        <div className="container">
          <h1>Make an appointment</h1>
          <hr />
          {alertModal}
          <Appointment btnStyle={buttonStyle} />
          <Footer bgStyle={backgroundStyle} linkStyle={linkStyle} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    appointment: state.appointment,
    theme: state.theme
  };
}
AppointmentPage.propTypes = {
  fetchTheme: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { fetchTheme }
)(AppointmentPage);
