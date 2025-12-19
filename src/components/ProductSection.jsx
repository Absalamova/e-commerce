import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductSection({ title, data, tag }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? data : data.slice(0, 4);

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">{title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
        </div>

        {data.length > 4 && (
          <div className="flex gap-3">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors font-medium"
              >
                Show All ({data.length})
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Show Less
              </button>
            )}

            {tag && (
              <Link
                to={`/products/${encodeURIComponent(tag)}`}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show more indicator */}
      {!showAll && data.length > 4 && (
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span>Showing {visibleProducts.length} of {data.length} products</span>
            <button
              onClick={() => setShowAll(true)}
              className="text-orange-500 hover:text-orange-600 font-medium underline"
            >
              Show all
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
