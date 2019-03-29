import React,{Component} from "react";
import * as moment from "moment";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

/*
export default ({ name, date, comment, rating }) => {
  return (
<div>
    <p className="lead">{name}</p>
    <p>{date}</p>
    <p><Rater rating={rate} interactive={false}/></p>
    <p>{comment}</p>
  </div>
  );
};
*/

class ReviewItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { _id, name, rating, comment, date } = this.props.review;
    const momentDate = moment(date);
    const reviewDate = momentDate.utc().format("MMMM Do YYYY");
    return (
      <div className="card card-body text-dark">
    <p className="lead">{name}</p>
    <p className="message-date">{reviewDate}</p>
    <p><Rater rating={rating} interactive={false}/></p>
    <p>{comment}</p>
  </div>
    );
}
}
export default ReviewItem;