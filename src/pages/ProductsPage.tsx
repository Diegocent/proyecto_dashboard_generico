import React from "react";
import { Header } from "../components/common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import { ProductsTable } from "../components/products/ProductsTable";
import { CategoryDistributionChart } from "../components/overview/CategoryDistributionChart";
import { SalesTrendChart } from "../components/products/SalesTrendChart";

export const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value="$12,345"
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value="1,234"
            color="#8b5cf6"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value="567"
            color="#ec4899"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="12.5%"
            color="#10b981"
          />
        </motion.div>

        <ProductsTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};
