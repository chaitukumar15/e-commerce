import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsList, CartList } from "../redux/actions/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./components.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let Display = () => {
  let dispatch = useDispatch();
  let selector = useSelector((state) => state);
  console.log(selector);

  let FetchList = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    console.log(response);
    dispatch(ProductsList(response.data));
  };
  useEffect(() => {
    FetchList();
  }, []);

  let addingCart = (id, name) => {
    toast.info(`${name} added to cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    dispatch(CartList(id));
  };

  let displayList = selector.allProducts.ProductList;

  return (
    <>
      <div className="DisplayList">
        {displayList.map((val, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img
              variant="top"
              src={val.image}
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>${val.price} </Card.Title>
              <Card.Text>{val.title}</Card.Text>
              <Button
                variant="primary"
                onClick={() => addingCart(val.id, val.title)}
              >
                add to cart
              </Button>
              <ToastContainer />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Display;
