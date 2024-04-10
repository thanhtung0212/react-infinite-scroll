import { Pagination, Product } from "../Types";

const API_URL = "https://dummyjson.com";

export const getListProduct = async ({
  limit = 20,
  skip = 0
}: {
  limit?: number;
  skip?: number;
}) => {
  const response = await fetch(
    `${API_URL}/products?limit=${limit}&skip=${skip}`
  );
  return response.json() as Promise<
    {
      products: Product[];
    } & Pagination
  >;
};

export const searchProduct = async (query: string) => {
  const response = await fetch(`${API_URL}/products/search?q=${query}`);
  return response.json();
};
