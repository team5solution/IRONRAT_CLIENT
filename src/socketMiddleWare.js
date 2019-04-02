import { addNewProduct } from "./action/products";
import { addNewReview } from "./action/reviews";
import { addNewJob } from "./action/job";
import { sendCandidate } from "./action/candidates";


export const createSocketMiddleWare = socket => {
  let eventFlag = false;
  return store => next => action => {
    if (!eventFlag) {
      eventFlag = true;
      socket.on("new product", data => {
        next(addNewProduct(data.createdProduct));
      });
      socket.on("new review", data => {
        next(addNewReview(data));
      });
      socket.on("new job", data => {
        next(addNewJob(data));
      });
      socket.on("send application", data => {
        next(sendCandidate(data));
      });
    }
    return next(action);
  };
};
