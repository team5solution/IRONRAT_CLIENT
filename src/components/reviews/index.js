import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReview } from "../../action/reviews";
import { fetchTheme } from "../../action/themes";
import { Loading, isEmpty, getTheme } from "../../common";
import ReviewItem from "./reviewItems";
import ReviewBox from "./reviewBox";
import PropTypes from "prop-types";
import NavBar from "../navBar";
import Footer from "../footer";

class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.review.reviewItem.length === 0) {
      this.props.fetchReview();
    }
    if (isEmpty(this.props.theme.info)) {
      this.props.fetchTheme();
    }
  }

  render() {
    const {
      review: { isFetching, reviewItem }
    } = this.props;
    const { info } = this.props.theme;

    const { backgroundStyle, linkStyle, navStyle, buttonStyle } = getTheme(
      info
    );
    if (isFetching) {
      return <Loading />;
    }

    return (
      <div style={backgroundStyle}>
        <NavBar navStyle={navStyle} btnStyle={buttonStyle} />

        <div className="container">
          <h1>Customer Reviews</h1>
          <br />
          <ReviewBox btnStyle={buttonStyle} />
          {reviewItem.map((item, i) => (
            <ReviewItem key={i} {...item} bgStyle={backgroundStyle} />
          ))}
        </div>
        <Footer bgStyle={backgroundStyle} linkStyle={linkStyle} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    review: state.review,
    theme: state.theme
  };
}
Reviews.propTypes = {
  fetchReview: PropTypes.func.isRequired,
  fetchTheme: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchReview, fetchTheme }
)(Reviews);
