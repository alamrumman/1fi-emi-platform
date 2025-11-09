// App Component to demonstrate routing
import { useState,useEffect } from "react";
import ProductsPage from "../Components/ProductPage"
import ProductDetail from "../Components/Productdetail";


const App = () => {
  const [currentView, setCurrentView] = useState("products");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      console.log("Hash changed to:", hash); // Debug
      if (hash.startsWith("product/")) {
        setCurrentView("detail");
        setRefreshKey((prev) => prev + 1); // Force re-render
      } else {
        setCurrentView("products");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Call immediately on mount

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return currentView === "products" ? (
    <ProductsPage />
  ) : (
    <ProductDetail key={refreshKey} />
  );
};

export default App;
