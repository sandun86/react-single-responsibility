import { useFetchProducts } from "../hooks/useFetchProducts";
import LoadingDisplay from "../components/LoadingDisplay";
import ErrorDisplay from "../components/ErrorDisplay";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const { data: products, isFetching, error } = useFetchProducts();

  return (
    <div>
      <h1>Product Page</h1>
      {isFetching && <LoadingDisplay></LoadingDisplay>}
      {error && <ErrorDisplay></ErrorDisplay>}
      {products && <ProductList products={products} />}
    </div>
  );
}
