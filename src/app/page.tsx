"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  max-width: 80rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export interface Products {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

async function getProducts(currentPage: number): Promise<Products[]> {
  const request = await fetch(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${currentPage}&rows=8&sortBy=id&orderBy=DESC`
  );

  const response = await request.json();

  if (!request.ok || response.error) {
    throw new Error(response.error || "Error fetching data");
  }

  return response.products as Products[];
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery(["products", currentPage], () =>
    getProducts(currentPage)
  );

  if (isLoading) {
    // Retornar um array vazio enquanto os dados estão sendo carregados
    return (
      <>
        <Container>
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCard key={index} product={null} />
          ))}
        </Container>
      </>
    );
  }

  if (isError || !data || data.length === 0) {
    return (
      <section>
        <p>Ocorreu um Erro</p>
      </section>
    );
  }

  return (
    <>
      <Container>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};

export default Home;
