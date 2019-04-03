import React,{Component} from "react";
import { SERVER_URL } from "../../settings";
import Candidate from "./candidates";
import Carousel from 'nuka-carousel';

const Job = (item) => {
  const jd = item._id;
  const title = item.title;
  const description= item.description;
  const jobImages = item.images.map((jobItem, index) => {
    const altName = jobItem.altName;
    const imageSrc = SERVER_URL + jobItem;
    return (
      <img  key={index} src={imageSrc} alt={altName} />
    );
  });
  return (
      <div className="col-md-6">
      <h3 className="mt-3">{title}</h3>
     
<Carousel wrapAround={true} transitionMode={'scroll3d'}>
{jobImages}
      </Carousel>
    <p>{description}</p>
    <Candidate
     idofJob={jd} titleofJob={title}/>
  </div>
  );
}; 
export default Job;
