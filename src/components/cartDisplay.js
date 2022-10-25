import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./components.css";
import { useSelector, useDispatch } from "react-redux";
import {
  CartDelete,
  decrementCart,
  IncrementCart,
} from "../redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let CartDisplay = () => {
  let dispatch = useDispatch();
  let selector = useSelector((state) => state.allProducts);
  console.log(selector.ProductList);
  console.log(selector.cart);
  console.log(selector.count);
  let products = selector.ProductList;
  let displayCarts = new Set(selector.cart);
  let displayCart = [...displayCarts];

  let DeleteCart = (id, name) => {
    console.log(id);
    console.log(name);
    toast.error(`${name} deleted from cart`, {
      position: toast.POSITION.TOP_LEFT,
    });
    dispatch(CartDelete(id));
  };
  let decrement = () => {
    dispatch(decrementCart());
  };
  let increment = () => {
    dispatch(IncrementCart());
  };

  let display = displayCart.map((val, index) => (
    <Table>
      <tr className="tableData">
        <td>
          <img
            src={products[val - 1].image}
            width="200px"
            height="200px"
            alt="i"
          />
        </td>
        {selector.count <= 0 ? (
          <td>
            <Button className="SymbolBtn" onClick={() => DeleteCart(val)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </Button>
          </td>
        ) : (
          <td>
            <Button className="button" onClick={decrement}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </Button>
          </td>
        )}

        <td>
          <h4>Qnt:{selector.count}</h4>
        </td>
        <td>
          <Button className="button" onClick={increment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </Button>
        </td>

        <td>$:{products[val - 1].price * selector.count}</td>
        <td>{products[val - 1].title.slice(0, 10)}</td>
        <td>
          <Button
            className="danger"
            onClick={() => DeleteCart(val, products[val - 1].title)}
          >
            delete
          </Button>
        </td>
        <ToastContainer />
      </tr>
    </Table>
  ));

  return <>{display}</>;
};

export default CartDisplay;
