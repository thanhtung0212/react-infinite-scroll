import { ChangeEvent, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItem from "./Components/Product/ProductItem";
import { getListProduct, searchProduct } from "./Services/Apis";
import { Product } from "./Services/Types";
import SearchBox from "./Components/SearchBox/SearchBox";
import Loading from "./Components/Loading/Loading";

function App() {
  let timerId: number | null | undefined = null;

  /* All State */
  const [products, setProducts] = useState<Product[]>([]);
  const [skipQuery, setSkipQuery] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchListProduct(20, 20);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(async () => {
      try {
        const data = await searchProduct(searchTerm);
        data.products.length >= 20 ? setHasMore(true) : setHasMore(false);
        setProducts(data.products);
        setSkipQuery(0);
      } catch (error) {
        console.error("Error occurred while searching products: ", error);
      }
    }, 500);
  };

  const fetchListProduct = async (limit = 20, skip = skipQuery + 20) => {
    try {
      const response = await getListProduct({ limit: limit, skip: skip });
      response.products.length > 0 ? setHasMore(true) : setHasMore(false);
      setProducts([...products, ...response.products]);
      setSkipQuery(response.skip + 20);
      return response.products;
    } catch (error) {
      console.error("Error occurred while fetching list of products: ", error);
    }
  };

  /* Render */
  return (
    <div className='main'>
      <SearchBox handleChange={handleChange} />
      <InfiniteScroll
        height={"calc(100vh - 100px)"}
        dataLength={products.length}
        next={() => fetchListProduct(20, skipQuery)}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className='d-flex flex-wrap justify-content-center'>
          {products.map((product) => (
            <ProductItem key={product.id + product.title} item={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
