import { Button, Card, Col, Row, Spin } from 'antd';
import { useProducts } from '../api/requests';
import Product from '../components/Product';
import { useState } from 'react';

const Home = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Spin />;
  if (error) return <p>Произошла ошибка...</p>;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Все товары</h2>
      <Row gutter={16}>
        {data.products.map((product) => (
          <Col span={6} key={product.id}>
            <Product product={product} page="home" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
