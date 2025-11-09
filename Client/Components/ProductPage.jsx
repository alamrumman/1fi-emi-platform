import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  CreditCard,
  TrendingUp,
  Check,
  ArrowLeft,
} from "lucide-react";

// API Base URL
const API_BASE_URL = "http://localhost:3000/api";

// ProductsPage Component - List of all products
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/products`);
        const result = await response.json();

        if (result.success) {
          setProducts(result.data);
        } else {
          setError(result.message || "Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(
          "Unable to connect to server. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-950/50 border border-red-800 rounded-xl p-6 mb-4">
            <p className="text-red-400 mb-2">⚠️ Error loading products</p>
            <p className="text-gray-400 text-sm">{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold text-white">1Fi</h1>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white transition-colors">
                How it Works
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                Why 1Fi
              </button>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full font-semibold transition-colors hover:cursor-auto">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-violet-950/50 border border-violet-800 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              <span className="text-violet-300 text-sm">
                Zero-cost EMIs backed by your investments
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Turn Your{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Mutual Funds
              </span>
              <br />
              into Buying Power
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Get what you want today — pay over time with zero-cost EMIs,
              backed by your mutual fund investments.
            </p>

            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center space-x-2">
              <span>Check eligibility in 15s</span>
              <span>→</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2 text-gray-300">
              <TrendingUp className="w-5 h-5 text-violet-400" />
              <span>Multiple products</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <CreditCard className="w-5 h-5 text-violet-400" />
              <span>0% EMI</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Check className="w-5 h-5 text-violet-400" />
              <span>Backed by your mutual fund</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-white mb-2">
            Premium Smartphones and Laptops
          </h3>
          <p className="text-gray-400">
            Choose from our curated selection of flagship devices
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No products available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all duration-300 overflow-hidden border border-slate-800 hover:border-violet-700 cursor-pointer group"
              >
                <div
                  className="relative bg-slate-800 aspect-square flex items-center justify-center overflow-hidden"
                  onClick={() =>
                    (window.location.hash = `product/${product.id}`)
                  }
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.emiPlans && product.emiPlans[0] && (
                    <div className="absolute top-3 right-3 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.emiPlans[0].label ||
                        `${product.emiPlans[0].interestRate}% EMI`}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h4 className="font-bold text-lg text-white mb-1 group-hover:text-violet-400 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    {product.brand}
                    {product.variants &&
                      product.variants.length > 0 &&
                      ` • ${product.variants.length} variants`}
                  </p>

                  <div className="border-t border-slate-800 pt-4 mt-4">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-2xl font-bold text-white">
                        ₹
                        {(
                          product.price ||
                          product.basePrice ||
                          0
                        ).toLocaleString()}
                      </span>
                    </div>

                    {product.emiPlans && product.emiPlans[0] && (
                      <div className="bg-violet-950/30 border border-violet-900/50 rounded-xl p-3 mb-4">
                        <p className="text-xs text-gray-400 mb-1">
                          Starting EMI
                        </p>
                        <p className="text-lg font-bold text-violet-400">
                          ₹
                          {Math.ceil(
                            ((product.price || product.basePrice || 0) -
                              (product.minDownpayment || 0)) /
                              product.emiPlans[0].tenure
                          ).toLocaleString()}
                          /mo
                        </p>
                        <p className="text-xs text-gray-500">
                          for {product.emiPlans[0].tenure} months
                        </p>
                      </div>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.hash = `product/${product.id}`;
                      }}
                      className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info Banner */}
      <div className="bg-slate-900 border-y border-slate-800 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-violet-400 mb-2">Zero</h4>
              <p className="text-gray-400">Processing Fees</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-violet-400 mb-2">8%</h4>
              <p className="text-gray-400">Interest Rate p.a.</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-violet-400 mb-2">
                15-30%
              </h4>
              <p className="text-gray-400">Investment Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductDetail Component - Individual product details
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedEMI, setSelectedEMI] = useState(null);
  const [selectedDownpayment, setSelectedDownpayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        // Extract product ID from URL hash
        const hash = window.location.hash.slice(1);
        const productId = hash.split("/")[1];

        if (!productId) {
          setError("No product ID provided");
          setLoading(false);
          return;
        }

        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        const result = await response.json();

        if (result.success) {
          const productData = result.data;
          setProduct(productData);

          // Set initial selections
          if (productData.variants && productData.variants.length > 0) {
            setSelectedVariant(productData.variants[0]);
          }
          if (
            productData.downpaymentOptions &&
            productData.downpaymentOptions.length > 0
          ) {
            setSelectedDownpayment(productData.downpaymentOptions[0]);
          }
          if (productData.emiPlans && productData.emiPlans.length > 0) {
            setSelectedEMI(productData.emiPlans[0]);
          }
        } else {
          setError(result.message || "Failed to fetch product details");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Unable to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="bg-red-950/50 border border-red-800 rounded-xl p-6 mb-4">
            <p className="text-red-400 mb-2">⚠️ Error loading product</p>
            <p className="text-gray-400 text-sm">
              {error || "Product not found"}
            </p>
          </div>
          <button
            onClick={() => (window.location.hash = "")}
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => window.history.back()}
            className="text-violet-400 hover:text-violet-300 font-semibold flex items-center space-x-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <img
                src={
                  product.images && product.images[0]
                    ? product.images[0].url
                    : ""
                }
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-4 aspect-square flex items-center justify-center cursor-pointer hover:border-violet-700 transition-colors"
                  >
                    <img
                      src={img.url}
                      alt={img.alt || `View ${idx + 2}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                {product.name}
              </h1>
              <p className="text-gray-400 mb-6">
                {selectedVariant
                  ? `Storage: ${selectedVariant.storage}, Color: ${selectedVariant.color}`
                  : product.brand}
              </p>

              <div className="text-4xl font-bold text-white mb-8">
                ₹
                {(
                  selectedVariant?.price ||
                  product.basePrice ||
                  0
                ).toLocaleString()}
              </div>

              {/* Color & Storage Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">
                    Select Variant
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant._id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedVariant?._id === variant._id
                            ? "border-violet-600 bg-violet-950/30"
                            : "border-slate-700 hover:border-violet-800 bg-slate-800"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-6 h-6 rounded-full border-2 border-slate-600"
                            style={{ backgroundColor: variant.colorCode }}
                          ></div>
                          <div className="text-left">
                            <p className="font-semibold text-sm text-white">
                              {variant.color}
                            </p>
                            <p className="text-xs text-gray-400">
                              {variant.storage}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Downpayment Options */}
              {product.downpaymentOptions &&
                product.downpaymentOptions.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">
                      Choose a Downpayment
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {product.downpaymentOptions.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedDownpayment(option)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            selectedDownpayment?.amount === option.amount
                              ? "border-violet-600 bg-violet-600 text-white"
                              : "border-slate-700 hover:border-violet-800 bg-slate-800 text-white"
                          }`}
                        >
                          <p className="font-bold text-lg">
                            ₹{option.amount.toLocaleString()}
                          </p>
                          <p className="text-xs opacity-80">
                            {option.percentage}% down
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              {/* EMI Plans */}
              {product.emiPlans && product.emiPlans.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-300 mb-3">
                    Choose EMI Tenure
                  </h3>
                  <div className="space-y-3">
                    {product.emiPlans.map((plan) => {
                      const principal =
                        (selectedVariant?.price || product.basePrice) -
                        (selectedDownpayment?.amount || 0);
                      const emiAmount = Math.ceil(principal / plan.tenure);

                      return (
                        <button
                          key={plan._id}
                          onClick={() => setSelectedEMI(plan)}
                          className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                            selectedEMI?._id === plan._id
                              ? "border-violet-600 bg-violet-950/30"
                              : "border-slate-700 hover:border-violet-800 bg-slate-800"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedEMI?._id === plan._id
                                  ? "border-violet-600"
                                  : "border-slate-600"
                              }`}
                            >
                              {selectedEMI?._id === plan._id && (
                                <div className="w-3 h-3 rounded-full bg-violet-600"></div>
                              )}
                            </div>
                            <div className="text-left">
                              <p className="font-bold text-white">
                                ₹{emiAmount.toLocaleString()} x {plan.tenure}{" "}
                                months
                              </p>
                              <p className="text-xs text-gray-400">
                                ({plan.interestRate}% per month*)
                              </p>
                            </div>
                          </div>
                          {plan.label && (
                            <span className="bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded">
                              {plan.label}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    EMIs starting {product.emiStartDate || "3rd Dec"}
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-bold text-lg transition-colors">
                Buy on {selectedEMI?.tenure || 3} months EMI
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                *Total extra payment per month/order value
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="font-bold text-lg text-white mb-4">
                  Why Buy with 1Fi?
                </h3>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
