import { addNewProduct, updateProduct, deleteProduct } from "./action/products";
import { addNewTheme, updateTheme } from "./action/themes";
import { addNewReview, deleteReview } from "./action/reviews";
import { addNewJob, deleteJob } from "./action/job";
export const createSocketMiddleWare = socket => {
  let eventFlag = false;
  return store => next => action => {
    if (!eventFlag) {
      eventFlag = true;
      socket.on("new product", data => {
        next(addNewProduct(data.createdProduct));
      });
      socket.on("update product", data => {
        next(updateProduct(data));
      });
      socket.on("delete product", data => {
        next(deleteProduct(data));
      });
      socket.on("new theme", data => {
        next(addNewTheme(data));
      });
      socket.on("select theme", data => {
        next(updateTheme(data));
      });
      socket.on("new review", data => {
        next(addNewReview(data));
      });
      socket.on("delete review", data => {
        next(deleteReview(data));
      });
      socket.on("new career", data => {
        next(addNewJob(data));
      });
      socket.on("delete career", data => {
        next(deleteJob(data));
      });
    }
    return next(action);
  };
};
