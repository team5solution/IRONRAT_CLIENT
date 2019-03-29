import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendAppointment } from "../../action/appointment";
import {
  TextFieldGroup,
  TextAreaGroup,
  DateGroup,
  appointmentValidateInput
} from "../../common";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
<<<<<<< HEAD
      date:"",
=======
      date: "",
>>>>>>> master
      content: "",
      errors: {}
    };
  }
  passValid = () => {
    const { errors, isValid } = appointmentValidateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  };
  onSubmit = e => {
    e.preventDefault();
    const isValid = this.passValid();
    console.log("isValid", isValid);
    if (isValid) {
      this.setState({
        errors: {}
      });
      const appointment = {
        name: this.state.name,
        email: this.state.email,
        date: this.state.date,
        content: this.state.content
      };
      this.props.sendAppointment(appointment);
      this.setState({
        name: "",
        email: "",
        date: "",
        content: "",
        errors: {}
      });
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    //console.log(this.props);
    const { name, email, date, content, errors } = this.state;
    //console.log(this.state);
    const {
<<<<<<< HEAD
      appointment: {isSent, isSending, error }
    } = this.props;

    return (
      <div>
=======
      appointment: { isSent, isSending, error }
    } = this.props;

    return (
      <div className="form-group mb-5">
>>>>>>> master
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <TextFieldGroup
          field="name"
          label="Name"
          value={name}
          error={errors.name}
          onChange={e => {
            this.onChange(e);
          }}
        />

        <TextFieldGroup
          field="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={e => {
            this.onChange(e);
          }}
        />
        <DateGroup
<<<<<<< HEAD
        field="date"
        label="Choose prefered date:"
        value={date}
        error={errors.date}
        onChange={e => {
          this.onChange(e);
        }}
          />
=======
          field="date"
          label="Choose prefered date:"
          value={date}
          error={errors.date}
          onChange={e => {
            this.onChange(e);
          }}
        />
>>>>>>> master
        <TextAreaGroup
          field="content"
          label="what kind of work do you want done:"
          value={content}
          error={errors.content}
          onChange={e => {
            this.onChange(e);
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onSubmit}
          disabled={isSending}
        >
          <h6>Send appointment request</h6>
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    appointment: state.appointment
  };
}
Appointment.propTypes = {
  sendAppointment: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { sendAppointment }
)(Appointment);
