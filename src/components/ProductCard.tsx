import { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div key={product.id}>
      <b>{product.title}</b>
      <p>{product.price}</p>
      <p>{product.description}</p>
      
    </div>
  );
}
