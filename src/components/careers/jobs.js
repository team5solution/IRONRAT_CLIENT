import React, { Component } from "react";
import { SERVER_URL } from "../../settings";
import Candidate from "./candidates";
import Carousel from "nuka-carousel";

const Job = props => {
  const title = props.title;
  const description = props.description;
  const jobImages = props.images.map((jobItem, index) => {
    const altName = jobItem.altName;
    const imageSrc = SERVER_URL + jobItem;
    return <img key={index} src={imageSrc} alt={altName} />;
  });
  return (
    <div>
      <h3 className="mt-3">{title}</h3>

      <Carousel wrapAround={true} transitionMode={"scroll3d"}>
        {jobImages}
      </Carousel>
      <p>{description}</p>
      <Candidate btnStyle={props.btnStyle} title={title} jobId={props._id} />
    </div>
  );
};
export default Job;
