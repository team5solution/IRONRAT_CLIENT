import { addNewProduct } from "./action/products";

export const createSocketMiddleWare = socket => {
  let eventFlag = false;
  return store => next => action => {
    if (!eventFlag) {
      eventFlag = true;
      socket.on("new product", data => {
        next(addNewProduct(data.createdProduct));
      });
    }
    return next(action);
  };
};
