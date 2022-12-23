import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cata, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cata
            ? `http://localhost:4000/api/v1/products?category=${cata}`
            : "http://localhost:4000/api/v1/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cata]);

  useEffect(() => {
    cata &&
      setfilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cata, filters, products]);

  useEffect(() => {
    if (sort === "Newest") {
      setfilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilterProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilterProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cata ? filterProducts.map((item) => (
        <Product item={item} key={item.id} />
      )): products.slice(0,8).map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
