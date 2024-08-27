import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FavoritesProvider from "./context/FavoritesContext";
import CartProvider from "./context/CartContext";
import Home from "./Home";
import Login from "./Login";
import Reset from "./Reset";
import Cart from "./Cart";
import Catalog  from "./Catalog";
import Favorites from "./Favorites";
import ProductsMV, { prodListaMV } from "./ProductsMV";

export default function AppRoutes() {
  return (
    <Router>
      <FavoritesProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/redefinir-senha" element={<Reset />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/favoritos" element={<Favorites />} />
            {/* Rota Dinâmica para as Telas Cheias do Produtos (Mídia Visual)  */}
            {prodListaMV.map((produto) => (
              <Route
                key={produto.id}
                path={`/produtos/${produto.subCategory}`}
                element={<ProductsMV productsMV={produto} id={produto.id} />}
              />
            ))}
          </Routes>
        </CartProvider>
      </FavoritesProvider>
    </Router>
  )
}