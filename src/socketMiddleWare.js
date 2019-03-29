<<<<<<< HEAD
import { addNewProduct } from "./action/products";
import { addNewReview } from "./action/reviews";


=======
import { addNewProduct, updateProduct, deleteProduct } from "./action/products";
import { addNewCareer, updateCareer, deleteCareer } from "./action/careers";
>>>>>>> master
export const createSocketMiddleWare = socket => {
  let eventFlag = false;
  return store => next => action => {
    if (!eventFlag) {
      eventFlag = true;
      socket.on("new product", data => {
        next(addNewProduct(data.createdProduct));
      });
<<<<<<< HEAD
      socket.on("new review", data => {
        next(addNewReview(data));
=======
      socket.on("update product", data => {
        next(updateProduct(data));
      });
      socket.on("delete product", data => {
        next(deleteProduct(data));
      });
      socket.on("new career", data => {
        next(addNewCareer(data));
      });
      socket.on("update career", data => {
        next(updateCareer(data));
      });
      socket.on("delete career", data => {
        next(deleteCareer(data));
>>>>>>> master
      });
    }
    return next(action);
  };
};
