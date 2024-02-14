import { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className='flex gap-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
