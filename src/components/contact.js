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

              <p>1385 Woodroffe Ave, Nepean, ON K2G 1V8</p>

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.0244827023034!2d-75.75843498415502!3d45.34831804918894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0718cc4a6ad7%3A0xc6cc467725843e2b!2sAlgonquin+College!5e0!3m2!1sen!2sca!4v1549745730393"
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
