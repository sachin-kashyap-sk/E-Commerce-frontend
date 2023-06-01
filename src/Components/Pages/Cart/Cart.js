import React, { useEffect, useMemo } from "react";
import classes from "../../../Styles/Pages/Cart/Cart.module.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import add from ".././../../Assets/add.png";
import minus from ".././../../Assets/minus.png";
import bin from "../../../Assets/bin.png";
import {
  addQty,
  subQty,
  removeFromCart,
} from "../../ReduxSection/Cart/CartSlice";
import { CartApi, CartDelete, UpdateToCart } from "../../BackendApi/Cart/Cart";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CartApi(), UpdateToCart());
  }, [dispatch]);

  const { products } = useSelector((state) => state.cart);

  const totalPrice = useMemo(() => {
    let temp = 0;
    products?.forEach((item) => {
      item?.products?.forEach((element) => {
        temp += element.price * element.quantity;
      });
    });

    return temp;
  }, [products]);

  const TotalItem = () => {
    let temp = 0;
    products?.forEach((product) =>
      product?.products?.forEach((item) => {
        temp += item.quantity;
      })
    );
    return temp;
  };

  const AddQty = (_id, item) => {
    const temp = Object.assign({}, item);
    delete temp._id;
    dispatch(addQty({ _id }));
    dispatch(
      UpdateToCart({
        _id,
        products: [
          {
            ...temp,
            quantity: item.quantity + 1,
          },
        ],
      })
    );
  };
  const SubQty = (_id, item) => {
    const temp = Object.assign({}, item);
    delete temp._id;
    dispatch(subQty({ _id }));
    dispatch(
      UpdateToCart({
        _id,
        products: [
          {
            ...temp,
            quantity: item.quantity - 1,
          },
        ],
      })
    );
  };

  const RemoveProduct = (_id) => {
    dispatch(removeFromCart(_id));
    dispatch(CartDelete(_id));
  };

  return (
    <Container maxWidth="false">
      <Box style={{ minHeight: "100vh" }}>
        <Box className={classes.mainContainer}>
          <Box className={classes.cartContainer}>
            <p className={classes.headline}>Shopping Cart</p>
            <p className={classes.qty}>Price</p>
          </Box>
        </Box>
        <Box>
          {products?.map((product) => (
            <Box key={product._id}>
              {product?.products?.map((item) => (
                <Box className={classes.imageContainer} key={item._id}>
                  <img
                    className={classes.cartImage}
                    src={item.image}
                    alt="product"
                  />
                  <Box className={classes.headers}>
                    <Box className={classes.priceContainer}>
                      <p className={classes.headline}>Brand : {item.title}</p>
                      <p className={classes.price}>{item.price} $</p>
                    </Box>
                    <Box className={classes.descriptionContainer}>
                      <p className={classes.description}>
                        Description : {item.description}
                      </p>
                    </Box>
                    <p className={classes.qty}>Quantity : {item.quantity}</p>

                    <Box className={classes.btnMain}>
                      <Box className={classes.btnContainer}>
                        <Button
                          style={{ borderRadius: "50px" }}
                          size="small"
                          variant="outlined"
                          onClick={() => {
                            AddQty(product._id, item);
                          }}
                        >
                          <img width="32px" height="32px" src={add} alt="add" />
                        </Button>

                        <Box>
                          <h1>{item.quantity}</h1>
                        </Box>
                        <Button
                          size="small"
                          style={{ borderRadius: "50px" }}
                          variant="outlined"
                          disabled={item.quantity === 1}
                          onClick={() => {
                            SubQty(product._id, item);
                          }}
                        >
                          <img
                            width="32px"
                            height="32px"
                            src={minus}
                            alt="minus"
                          />
                        </Button>
                      </Box>

                      <img
                        width="32"
                        height="32px"
                        onClick={() => {
                          RemoveProduct(product._id);
                        }}
                        src={bin}
                        alt="bin"
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
          <Box className={classes.subTotal}>
            <p className={classes.headlineSec}>
              Sub Total ({TotalItem()} item) : {totalPrice} $
            </p>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
