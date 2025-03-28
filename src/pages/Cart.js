import React from "react";
import { useStoreProject } from "../features/store";
import Product from "../components/Product";
import { List } from "antd";

const Cart = () => {
  const { cart } = useStoreProject();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Корзина</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Ваша корзина пуста</p>
      ) : (
        <List
          dataSource={cart}
          grid={{ gutter: 16, column: 4 }}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Product product={item} page="cart" />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Cart;
