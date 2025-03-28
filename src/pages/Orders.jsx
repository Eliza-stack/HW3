import React from "react";
import { useOrderStore } from "../features/store";
import { List, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { orders } = useOrderStore();
  const navigate = useNavigate();

  const handleViewOrder = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div>
      <h2>Мои Заказы</h2>
      {orders.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={orders}
          renderItem={(order, index) => (
            <List.Item
              key={index}
              actions={[
                <Button onClick={() => handleViewOrder(order.id)}>
                  Смотреть детали
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={`Заказ #${order.id}`}
                description={`Адрес: ${order.address}, Телефон: ${order.phone}`}
              />
            </List.Item>
          )}
        />
      ) : (
        <p>У вас нет заказов.</p>
      )}
    </div>
  );
};

export default Orders;
