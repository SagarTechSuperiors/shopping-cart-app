import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/slices/productSlice";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4 fw-bold text-center">Products</h2>

        {status === "loading" && <p>Loading products...</p>}
        {status === "failed" && <p>Error: {error}</p>}

        <div className="row g-4">
          {items.map((product) => (
            <div className="col-md-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
