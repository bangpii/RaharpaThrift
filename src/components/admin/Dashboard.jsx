import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const Dashboard = () => {
  const statsData = [
    { title: "New Orders", value: "1,234", icon: "bx bx-cart", color: "bg-pink-600" },
    { title: "Total Sales", value: "IDR 12.4M", icon: "bx bx-dollar", color: "bg-pink-600" },
    { title: "Total Users", value: "5,678", icon: "bx bx-user", color: "bg-pink-600" },
    { title: "Item", value: "890", icon: "bx bx-package", color: "bg-pink-600" }
  ]

  const recentOrders = [
    { user: "John Doe", product: "T-Shirt", status: "Completed", date: "18 Nov 2025" },
    { user: "Jane Smith", product: "Jeans", status: "Pending", date: "18 Nov 2025" },
    { user: "Bob Johnson", product: "Shoes", status: "Completed", date: "17 Nov 2025" },
    { user: "Alice Brown", product: "Jacket", status: "Processing", date: "17 Nov 2025" },
    { user: "Mike Wilson", product: "Hat", status: "Completed", date: "16 Nov 2025" }
  ]

  // Data untuk bar chart
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 32000, 30000, 35000, 40000, 45000],
        backgroundColor: 'rgba(219, 39, 119, 0.8)',
        borderColor: 'rgba(219, 39, 119, 1)',
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  }

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  // Data untuk doughnut chart
  const doughnutChartData = {
    labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Others'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(219, 39, 119, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(244, 114, 182, 0.8)',
          'rgba(249, 168, 212, 0.8)',
          'rgba(251, 207, 232, 0.8)',
        ],
        borderColor: [
          'rgba(219, 39, 119, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(244, 114, 182, 1)',
          'rgba(249, 168, 212, 1)',
          'rgba(251, 207, 232, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex items-start gap-3 mb-4 md:mb-0">
          <div className="mt-1">
            <i className='bx bx-home text-lg text-pink-600'></i>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-1">DASHBOARD</h1>
            <p className="text-gray-600">Welcome to your admin dashboard</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:bg-gray-50 transition-colors">
            <div className="text-sm text-gray-600">Selasa, 18 November 2025</div>
          </button>
          <button className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:bg-gray-50 transition-colors">
            <div className="text-sm text-gray-600">Rabu, 19 November 2025</div>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <div 
            key={index}
            className={`${stat.color} rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              </div>
              <div className="p-3 bg-white/20 rounded-xl">
                <i className={`${stat.icon} text-2xl`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Sales Overview</h3>
            <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
              View Report
            </button>
          </div>
          <div className="h-64">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Revenue Distribution</h3>
            <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
              View Details
            </button>
          </div>
          <div className="h-64">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
          <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
            View All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">User</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Product</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-600 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-800">{order.user}</td>
                  <td className="py-3 px-4 text-gray-600">{order.product}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard