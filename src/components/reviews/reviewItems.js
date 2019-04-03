import React, { Component } from "react";
import * as moment from "moment";
import ReactStars from "react-stars";

const ReviewItem = props => {
  const { comment, date, name, rating, bgStyle } = props;
  const momentDate = moment(date);
  const reviewDate = momentDate.utc().format("MMMM Do YYYY");

  return (
    <div style={bgStyle}>
      <hr />
      <p className="lead">{name}</p>
      <p className="message-date">{reviewDate}</p>

      <ReactStars size={24} value={rating} edit={false} />
      <p>{comment}</p>
    </div>
  );
};

export default ReviewItem;
