import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import apiService from "../../services/api";

export default function ProductListPage() {
    const { tag } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {
        fetchProducts();
    }, [tag, currentPage]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await apiService.fetchProducts({
                tag: tag,
                page: currentPage,
                limit: itemsPerPage
            });
            setProducts(response.products);
            setTotalPages(Math.ceil(response.pagination.total / itemsPerPage));
        } catch (err) {
            console.error('Error fetching products:', err);
            setError('Failed to load products. Please try again.');
            // Fallback to local data
            try {
                const localData = apiService.getLocalProducts();
                const filteredProducts = localData.products.filter((p) => p.tag === tag);
                setProducts(filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
                setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
            } catch (localErr) {
                console.error('Error loading local products:', localErr);
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-[#FFFDF6] min-h-screen py-6 container mx-auto px-4">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                        <span className="ml-3 text-orange-500 font-medium">Loading products...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-[#FFFDF6] min-h-screen py-6 container mx-auto px-4">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center py-20">
                        <div className="text-red-500 text-lg font-medium mb-4">{error}</div>
                        <button
                            onClick={fetchProducts}
                            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FFFDF6] min-h-screen py-6 container mx-auto px-4">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500 text-center capitalize">
                    {tag} Products
                </h1>

                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-gray-500 text-lg">No products found in this category.</div>
                    </div>
                ) : (
                    <>
                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
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
                    </>
                )}
            </div>
        </div>
    );
}
