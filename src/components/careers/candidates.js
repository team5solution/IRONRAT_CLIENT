import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendCandidate } from "../../action/candidates";
import {
  TextFieldGroup,
  candidateValidateInput
} from "../../common";

class Candidate extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      email: "",
      resume: [],
      errors: {}
    };
  };
//ewewe
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  passValid = () => {
    const { errors, isValid } = candidateValidateInput(this.state);

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
      const candidate = {
        name: this.state.name,
        email: this.state.email,
        resume: this.state.resume
      };
      this.props.sendCandidate(candidate);
      this.setState({
      name: "",
      email: "",
      resume: [],
      errors: {}
      });
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  
  render() {
    
    const { open, name, email, resume, errors } = this.state;    
    const {
      candidate: {isSent, isSending, error }
    } = this.props;
    return (
 <div>
     <hr/>
        <button onClick={this.onOpenModal} className="btn btn-primary btn-lg" ><h6>Apply</h6></button>
        <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false}>
                    <div className="modal-header">
                        <h4 className="modal-title text-dark">Create review</h4>
                    </div>

                    {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                    <div className="text-dark">
        <TextFieldGroup
          field="name"
          label="Name:"
          value={name}
          error={errors.name}
          onChange={e => {
            this.onChange(e);
          }}
        />
        <TextFieldGroup
          field="email"
          label="Email:"
          value={email}
          error={errors.email}
          onChange={e => {
            this.onChange(e);
          }}
        />
        
        <div className="form-group">
          <label className="btn btn-info btn-file" style={{ fontSize: "22px" }}>
            <input
              type="file"
              id="resumes"
              onChange={this.resumeOnChange}
              multiple
            />
          </label>
        </div>
        
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onSubmit}
          disabled={isSending}
        >
          <h6>Submit Application</h6>
        </button>

                    <div className="modal-footer">
                        <button  className="btn btn-success" onClick={this.onCloseModal}>Close</button>
                    </div>
                    </div>
                    </Modal>
            </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    candidate: state.candidate
  };
}
Candidate.propTypes = {
  sendCandidate: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { sendCandidate }
)(Candidate);
