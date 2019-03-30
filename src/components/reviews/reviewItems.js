import React,{Component} from "react";
import * as moment from "moment";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const ReviewItem = (item) => {
  const rateNum = item.rating;
  const content= item.comment;
  const momentDate = moment(item.date);
  const reviewDate = momentDate.utc().format("MMMM Do YYYY");
  const name = item.name;
  
  return (
      <div className="card card-body text-dark">
    <p className="lead">{name}</p>
    <p className="message-date">{reviewDate}</p>
    
    <Rater rating={rateNum} interactive={false} />
    <p>{content}</p>
  </div>
  );
};

export default ReviewItem;
