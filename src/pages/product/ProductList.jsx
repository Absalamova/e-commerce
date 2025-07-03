import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { products } from './../../products-data';

export default function ProductListPage() {
    const { tag } = useParams();
    const filteredProducts = products.filter((p) => p.tag === tag);

    // Pagination setup
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="bg-[#FFFDF6] min-h-screen py-6 container mx-auto px-4">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
                 
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500 text-center capitalize">
                    {tag} Products
                </h1>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {paginatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                
                {totalPages > 1 && (
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-10 text-sm">
                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className="px-2 py-1 rounded bg-orange-100 hover:bg-orange-200 disabled:opacity-50"
                        >
                            &laquo;
                        </button>
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-2 py-1 rounded bg-orange-100 hover:bg-orange-200 disabled:opacity-50"
                        >
                            &lsaquo;
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded font-medium ${currentPage === i + 1
                                        ? "bg-orange-500 text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-2 py-1 rounded bg-orange-100 hover:bg-orange-200 disabled:opacity-50"
                        >
                            &rsaquo;
                        </button>
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className="px-2 py-1 rounded bg-orange-100 hover:bg-orange-200 disabled:opacity-50"
                        >
                            &raquo;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
