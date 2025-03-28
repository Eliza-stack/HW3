import React from "react";
import { Button, Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useStoreProject } from "../features/store";

const Product = ({ product }) => {
  const {
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
    cart,
    favorites,
  } = useStoreProject();
  const isInCart = cart.some((item) => item.id === product.id);
  const isInFavorites = favorites.some((item) => item.id === product.id);

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleFavoriteClick = () => {
    if (isInFavorites) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <Card
      title={product.title}
      cover={<img alt={product.title} src={product.thumbnail} />}
    >
      <p>Цена: {product.price}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          icon={<ShoppingCartOutlined />}
          onClick={handleCartClick}
          style={{ color: isInCart ? "green" : "black" }}
        />
        <Button
          icon={<HeartOutlined />}
          onClick={handleFavoriteClick}
          style={{ color: isInFavorites ? "red" : "black" }}
        />
      </div>
    </Card>
  );
};

export default Product;
