import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendMessage } from "../../action/message";
import {
  TextFieldGroup,
  TextAreaGroup,
  messageValidateInput
} from "../../common";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      content: "",
      errors: {}
    };
    //this.regex = /(&nbsp;|<([^>]+)>)/gi;
  }
  passValid = () => {
    const { errors, isValid } = messageValidateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  };
  onSubmit = e => {
    //console.log("on submit");
    e.preventDefault();
    const isValid = this.passValid();
    console.log("isValid", isValid);
    if (isValid) {
      this.setState({
        errors: {}
      });
      const message = {
        name: this.state.name,
        email: this.state.email,
        content: this.state.content
      };
      this.props.sendMessage(message);
      this.setState({
        name: "",
        email: "",
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
    const { name, email, content, errors } = this.state;
    //console.log(this.state);
    const {
      message: { isSent, isSending, error }
    } = this.props;

    return (
      <div>
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

        <TextAreaGroup
          field="content"
          label="Comment"
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
          <h6>submit comment</h6>
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    message: state.message
  };
}
MessageForm.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { sendMessage }
)(MessageForm);
