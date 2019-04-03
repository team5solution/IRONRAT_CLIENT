import React, { Component } from "react";
import Modal from "react-responsive-modal";
import ReactStars from "react-stars";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendReview } from "../../action/reviews";
import {
  TextFieldGroup,
  TextAreaGroup,
  reviewValidateInput
} from "../../common";
import Rater from "react-rater";

class ReviewBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      rating: 0,
      reviewContent: "",
      errors: {}
    };
  }
  //ewewe
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  passValid = () => {
    const { errors, isValid } = reviewValidateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  };
  onSubmit = e => {
    e.preventDefault();
    const isValid = this.passValid();
    // console.log("isValid", isValid);
    if (isValid) {
      this.setState({
        errors: {}
      });
      const review = {
        name: this.state.name,
        rating: this.state.rating,
        comment: this.state.reviewContent
      };
      this.props.sendReview(review);
      this.setState({
        name: "",
        rating: 0,
        reviewContent: "",
        errors: {},
        open: false
      });
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  ratingChanged = new_rating => {
    //console.log(new_rating);
    this.state.rating = new_rating;
  };

  render() {
    //console.log(this.props);
    const { open, name, rating, reviewContent, errors } = this.state;
    const {
      review: { isSent, isSending, error },
      btnStyle
    } = this.props;
    return (
      <div>
        <br />
        <button
          onClick={this.onOpenModal}
          className="btn btn-primary btn-lg"
          style={btnStyle}
        >
          <h6>Submit a Review</h6>
        </button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          showCloseIcon={false}
          className="modal-dialog modal-lg"
        >
          <div className="modal-header">
            <h4 className="modal-title text-dark">Create review</h4>
          </div>

          {errors.form && (
            <div className="alert alert-danger">{errors.form}</div>
          )}
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
            <TextAreaGroup
              field="reviewContent"
              label="Review:"
              value={reviewContent}
              error={errors.reviewContent}
              onChange={e => {
                this.onChange(e);
              }}
            />
            <ReactStars
              onChange={this.ratingChanged}
              count={5}
              value={0}
              size={30}
              half={false}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onSubmit}
              disabled={isSending}
            >
              <h6>Submit Review</h6>
            </button>

            <div className="modal-footer">
              <button className="btn btn-success" onClick={this.onCloseModal}>
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    review: state.review
  };
}
ReviewBox.propTypes = {
  sendReview: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { sendReview }
)(ReviewBox);
