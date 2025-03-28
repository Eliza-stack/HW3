import React from "react";
import { useStoreProject } from "../features/store";
import Product from "../components/Product";
import { List } from "antd";

const Favorites = () => {
  const { favorites } = useStoreProject();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Избранное</h2>
      {favorites.length === 0 ? (
        <p style={{ textAlign: "center" }}>Ваши избранные товары пусты</p>
      ) : (
        <List
          dataSource={favorites}
          grid={{ gutter: 16, column: 4 }}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Product product={item} page="favorites" />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Favorites;
