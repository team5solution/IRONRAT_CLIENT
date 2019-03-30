
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReview } from "../../action/reviews";
import { Loading } from "../../common";
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
    this.props.fetchReview();
  }

  render() {
    const {
      review: { isFetching, reviewItem}
    } = this.props;

    if (isFetching) {
      return <Loading />;
    }
   

    return (
      <div>
        <NavBar />
        <h3>Customer Reviews</h3>
        <div >
          <ReviewBox/>
            {reviewItem.map((item, i) => (
            <ReviewItem key={i} {...item}/>
          ))}
            
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    review: state.review
  };
}
Reviews.propTypes = {
  fetchReview: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchReview }
)(Reviews);