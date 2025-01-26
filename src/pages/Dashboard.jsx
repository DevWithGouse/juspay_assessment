import React from "react";
import MetricCard from "../components/MetricCard";
import ProjectionsChart from "../components/ProjectionsChart";
import RevenueChart from "../components/RevenueChart";
import RevenueMap from "../components/RevenueMap";
import TopProducts from "../components/TopProducts";
import TotalSales from "../components/TotalSales";
export default function Dashboard() {
  return (
    <div className="w-full flex flex-col gap-5 min-h-screen">
      <div className="text-xl font-semibold  text-gray-900 dark:text-white">
        eCommerce
      </div>
      
      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[300px]">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 p-4">
          <MetricCard title="Customers" value="3,781" change="+11.01%" type="increase" highlighted={true} />
          <MetricCard title="Orders" value="1,219" change="-0.03%" type="decrease" />
          <MetricCard title="Revenue" value="$695" change="+15.03%" type="increase" />
          <MetricCard title="Growth" value="30.1%" change="+6.08%" type="increase" highlighted={true} />
        </div>
        <div className=" rounded-xl p-4 h-full">
          <ProjectionsChart />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 min-h-[400px]">
        <div className=" lg:col-span-2 rounded-xl p-4 h-full">
          <RevenueChart />
        </div>
        <div className=" rounded-xl p-4 h-full">
          <RevenueMap />
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 min-h-[400px]">
        <div className=" lg:col-span-2 rounded-xl p-4 h-full">
          <TopProducts />
        </div>
        <div className=" rounded-xl p-4 h-full">
          <TotalSales />
        </div>
      </div>
    </div>
  );
}