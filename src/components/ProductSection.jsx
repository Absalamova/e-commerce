import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductSection({ title, data, tag }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? data : data.slice(0, 4);

  return (
    <section className="px-4 py-6">
      <div className="containe max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8" >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#FF7F3F]">{title}</h2>

          {!showAll && data.length > 4 && (
            <Link
              to={`/products/${encodeURIComponent(tag)}`}
              className="inline-flex items-center gap-1 text-sm text-[#FF7F3F] font-semibold transition duration-200 hover:text-[#ff6826] hover:underline group"
            >
              More Products
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          )}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
