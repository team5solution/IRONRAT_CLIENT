import React, { Component } from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import { connect } from "react-redux";
import { Modal } from "../../common";
import Appointment from "./appointment";
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
    //console.log(this.props);
    //console.log(this.state);
    const { isSent, isSending, error } = this.props.appointment;

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
      <div>
        <NavBar />

        <div className="container">
          <h1>Make an appointment</h1>
          <hr />
          {alertModal}
          <Appointment/>
          <Footer />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    appointment: state.appointment
  };
}
export default connect(mapStateToProps)(AppointmentPage);
