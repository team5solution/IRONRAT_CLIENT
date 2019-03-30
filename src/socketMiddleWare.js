import { addNewProduct } from "./action/products";
import { addNewReview } from "./action/reviews";


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
    }
    return next(action);
  };
};
