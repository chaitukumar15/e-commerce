export let ProductsList = (product) => {
  return {
    type: "ProductsList",
    payload: product,
  };
};

export let CartList = (id) => {
  return {
    type: "CartList",
    payload: id,
  };
};

export let CartDelete = (id) => {
  console.log(id);
  return {
    type: "cartDelete",
    payload: id,
  };
};

export let IncrementCart = () => {
  return {
    type: "increment",
  };
};
export let decrementCart = () => {
  return {
    type: "decrement",
  };
};
export let googleData = (gmailData) => {
  return {
    type: "gmail",
    payload: gmailData,
  };
};
