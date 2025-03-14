import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    stock: 10,
    category: "Category 1",
    sales: 1200,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    stock: 20,
    category: "Category 2",
    sales: 1300,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    stock: 30,
    category: "Category 3",
    sales: 1400,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    stock: 40,
    category: "Category 4",
    sales: 1500,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    stock: 50,
    category: "Category 5",
    sales: 1600,
  },
];

export const ProductsTable = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Products</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute top-3 left-3 text-gray-400" size={18} />
        </div>
      </div>
    </motion.div>
  );
};
