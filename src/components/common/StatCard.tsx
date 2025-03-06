import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
interface StatCardProps {
  icon: LucideIcon;
  value: string;
  color: string;
  name: string;
}

export const StatCard = ({ name, icon: Icon, value, color }: StatCardProps) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon className="mr-2" size={20} style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl front-semibold text-gray-100">{value}</p>
      </div>
    </motion.div>
  );
};
