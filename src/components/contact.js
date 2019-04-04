import React, { Component } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import MessageForm from "./message/messageFrom";
import { connect } from "react-redux";
import { Modal } from "../common";
class Contact extends Component {
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
    const { isSent, isSending, error } = this.props.message;
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
    const { isSent, isSending, error } = this.props.message;

    let alertModal;
    if (isSent && !error & this.state.alert) {
      alertModal = (
        <Modal
          type="success"
          content="The message was sent successfully!"
          show={this.state.alert}
        />
      );
    } else if (error & this.state.alert) {
      alertModal = (
        <Modal
          type="error"
          content="The message cannot be sent becuse of network or server problem"
          show={this.state.alert}
        />
      );
    }

    return (
      <div>
        <NavBar />

        <div className="container">
          <h1>Contact us</h1>

          <hr />

          <div className="row mt-5">
            <div className="col-md-6">
              <h2>We are located at:</h2>

              <p>1071 Buckhams Bay Rd, Ottawa, ON K0A 3M0</p>

              <h2>Call us at at:</h2>

              <p>
                <a href="tel:+16138623030">1 (613) 862-3030</a>
              </p>

              <h2>Call us at at:</h2>
              <p>
                <a href="mailto:carlsabourin@gmail.com">
                  carlsabourin@gmail.com
                </a>
              </p>
            </div>

            <div className="col-md-6">
              <iframe
                src="!1m14!1m8!1m3!1d11187.574126611913!2d-76.1124147!3d45.4920887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87ca9efe3f541643!2sIron+Rat+Customs!5e0!3m2!1sen!2sca!4v1554340795875!5m2!1sen!2sca"
                width="550"
                height="400"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen
              />
            </div>
          </div>
          {alertModal}
          <h2>Message us:</h2>

          <p>Feel free to leave a comment, feedback or inquires here!</p>
          <MessageForm />
          <Footer />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    message: state.message
  };
}
export default connect(mapStateToProps)(Contact);
