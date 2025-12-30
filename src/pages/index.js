import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import SEO from "../components/seo/SEO";
import { addToCart } from "@/redux/slices/cartSlice";
import Image from "next/image";

export default function Home({ products }) {
  const dispatch = useDispatch();
  const featuredSectionRef = useRef(null);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const scrollToFeatured = () => {
    featuredSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="ShopCart | Modern Online Shopping Experience"
        description="ShopCart is a modern shopping cart application built with Next.js and Redux."/>

      <section className="relative bg-[#0b132b] py-20 overflow-hidden">
        <div className="container d-flex align-items-center flex-column flex-lg-row">
          <div className="col-lg-6 text-white z-1">
            <span className="badge bg-primary mb-3">New Collection 2025</span>
            <h1 className="display-3 fw-bold mb-4">Elevate Your Lifestyle With ShoppyCart</h1>
            <p className="lead mb-5 opacity-75">
              Experience the fusion of minimalist design and premium quality. 
              Get 20% off on your first order.
            </p>
            <div className="d-flex gap-3">
             <button 
                className="btn btn-primary btn-lg px-5" 
                onClick={scrollToFeatured}
              >
                Shop Now
              </button>
              <button className="btn btn-outline-light btn-lg px-5" onClick={scrollToFeatured}>Explore</button>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 text-center">
             {/* Optimization: fetchPriority="high" for LCP */}
             <Image
               src="/shoppyLogo.png" 
               alt="Featured Product" 
               width={600} 
               height={500} 
               priority 
               fetchpriority="high"
               className="img-fluid floating-animation"
             />
          </div>
        </div>
      </section>

      <div className="container" ref={featuredSectionRef} id="featured-products">
        <h2 className="text-center text-white fw-bold mb-1 mt-4">
          Featured Products
        </h2>

        <div className="row g-4 mt-3">
          {products?.slice(0, 8).map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Fetch products with SSG
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
    revalidate: 3600,
  };
}
