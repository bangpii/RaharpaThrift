import React, { useState } from 'react'
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
  const [selectedDate, setSelectedDate] = useState('2025-11-19')
  const [showDatePicker, setShowDatePicker] = useState(false)
  
  // Data simulasi untuk tanggal berbeda
  const getSimulatedData = (date) => {
    const dataMap = {
      '2025-11-19': {
        stats: [
          { title: "New Orders", value: "1,234", icon: "bx bx-cart", color: "bg-pink-600" },
          { title: "Total Sales", value: "IDR 12.4M", icon: "bx bx-dollar", color: "bg-pink-600" },
          { title: "Total Users", value: "5,678", icon: "bx bx-user", color: "bg-pink-600" },
          { title: "Item", value: "890", icon: "bx bx-package", color: "bg-pink-600" }
        ],
        barChartData: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 32000, 30000, 35000, 40000, 45000],
        doughnutData: [65, 35], // Manual: 65%, Shoppie: 35%
        recentOrders: [
          { user: "John Doe", product: "T-Shirt", status: "Completed", date: "18 Nov 2025" },
          { user: "Jane Smith", product: "Jeans", status: "Pending", date: "18 Nov 2025" },
          { user: "Bob Johnson", product: "Shoes", status: "Completed", date: "17 Nov 2025" },
          { user: "Alice Brown", product: "Jacket", status: "Processing", date: "17 Nov 2025" },
          { user: "Mike Wilson", product: "Hat", status: "Completed", date: "16 Nov 2025" }
        ]
      },
      '2025-11-18': {
        stats: [
          { title: "New Orders", value: "987", icon: "bx bx-cart", color: "bg-pink-600" },
          { title: "Total Sales", value: "IDR 8.2M", icon: "bx bx-dollar", color: "bg-pink-600" },
          { title: "Total Users", value: "5,432", icon: "bx bx-user", color: "bg-pink-600" },
          { title: "Item", value: "765", icon: "bx bx-package", color: "bg-pink-600" }
        ],
        barChartData: [10000, 15000, 12000, 20000, 18000, 25000, 22000, 28000, 26000, 30000, 32000, 38000],
        doughnutData: [60, 40], // Manual: 60%, Shoppie: 40%
        recentOrders: [
          { user: "Sarah Lee", product: "Dress", status: "Completed", date: "17 Nov 2025" },
          { user: "Tom Wilson", product: "Shoes", status: "Completed", date: "17 Nov 2025" },
          { user: "Lisa Brown", product: "Bag", status: "Pending", date: "16 Nov 2025" },
          { user: "David Kim", product: "Watch", status: "Processing", date: "16 Nov 2025" },
          { user: "Emma Davis", product: "Jewelry", status: "Completed", date: "15 Nov 2025" }
        ]
      },
      '2025-11-17': {
        stats: [
          { title: "New Orders", value: "1,567", icon: "bx bx-cart", color: "bg-pink-600" },
          { title: "Total Sales", value: "IDR 15.1M", icon: "bx bx-dollar", color: "bg-pink-600" },
          { title: "Total Users", value: "6,123", icon: "bx bx-user", color: "bg-pink-600" },
          { title: "Item", value: "1,045", icon: "bx bx-package", color: "bg-pink-600" }
        ],
        barChartData: [15000, 22000, 18000, 28000, 25000, 35000, 32000, 38000, 35000, 42000, 45000, 50000],
        doughnutData: [70, 30], // Manual: 70%, Shoppie: 30%
        recentOrders: [
          { user: "Michael Chen", product: "Laptop", status: "Completed", date: "16 Nov 2025" },
          { user: "Sophia Wang", product: "Phone", status: "Processing", date: "16 Nov 2025" },
          { user: "James Lee", product: "Tablet", status: "Completed", date: "15 Nov 2025" },
          { user: "Olivia Kim", product: "Camera", status: "Pending", date: "15 Nov 2025" },
          { user: "Daniel Park", product: "Headphones", status: "Completed", date: "14 Nov 2025" }
        ]
      }
    }
    
    // Return data untuk tanggal yang dipilih, atau data default untuk tanggal lain
    return dataMap[date] || {
      stats: [
        { title: "New Orders", value: "0", icon: "bx bx-cart", color: "bg-pink-600" },
        { title: "Total Sales", value: "IDR 0", icon: "bx bx-dollar", color: "bg-pink-600" },
        { title: "Total Users", value: "0", icon: "bx bx-user", color: "bg-pink-600" },
        { title: "Item", value: "0", icon: "bx bx-package", color: "bg-pink-600" }
      ],
      barChartData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      doughnutData: [0, 0], // Manual: 0%, Shoppie: 0%
      recentOrders: []
    }
  }

  const simulatedData = getSimulatedData(selectedDate)
  
  const statsData = simulatedData.stats
  const recentOrders = simulatedData.recentOrders

  const handleDateClick = () => {
    setShowDatePicker(!showDatePicker)
  }

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value)
    setShowDatePicker(false)
  }

  // Data untuk bar chart
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: simulatedData.barChartData,
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

  // Data untuk doughnut chart - Hanya 2 kategori: Manual dan Shoppie
  const doughnutChartData = {
    labels: ['Manual', 'Shoppie'],
    datasets: [
      {
        data: simulatedData.doughnutData,
        backgroundColor: [
          'rgba(219, 39, 119, 0.8)', // Pink untuk Manual
          'rgba(236, 72, 153, 0.8)', // Pink lebih terang untuk Shoppie
        ],
        borderColor: [
          'rgba(219, 39, 119, 1)',
          'rgba(236, 72, 153, 1)',
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
        labels: {
          usePointStyle: true,
          padding: 15,
        },
      },
    },
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('id-ID', options)
  }

  return (
    <div className="space-y-4 xs:space-y-6 overflow-x-hidden md:overflow-x-visible">
      {/* Header dengan Breadcrumb */}
      <div className="flex flex-col">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs xs:text-sm text-gray-500 mb-1 xs:mb-2">
          <div className="flex items-center space-x-2">
            <i className='bx bx-home text-base xs:text-lg text-pink-600'></i>
            <span className="text-pink-600 font-semibold">Dashboard</span>
          </div>
        </div>
        
        {/* Title dan Date */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">DASHBOARD</h1>
            <p className="text-gray-600 mt-1 text-xs xs:text-sm lg:text-base">Welcome to your admin dashboard</p>
          </div>
          
          <div className="relative">
            <button 
              onClick={handleDateClick}
              className="bg-white border border-gray-200 rounded-xl px-2 xs:px-3 py-1 xs:py-2 lg:px-4 lg:py-3 shadow-sm hover:bg-gray-50 transition-colors mt-3 xs:mt-4 md:mt-0 w-full md:w-auto"
            >
              <div className="text-xs lg:text-sm text-gray-600 text-center md:text-left">{formatDate(selectedDate)}</div>
            </button>
            
            {/* Date Picker Modal */}
            {showDatePicker && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-10 p-4 min-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-800">Pilih Tanggal</h3>
                  <button 
                    onClick={() => setShowDatePicker(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <i className='bx bx-x text-lg'></i>
                  </button>
                </div>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  max="2025-12-31"
                  min="2025-01-01"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 lg:grid-cols-4 xs:gap-3 lg:gap-4">
        {statsData.map((stat, index) => (
          <div 
            key={index}
            className={`${stat.color} rounded-2xl p-2 xs:p-3 sm:p-4 lg:p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-xs lg:text-sm">{stat.title}</p>
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mt-1 lg:mt-2">{stat.value}</h3>
              </div>
              <div className="p-1 xs:p-2 lg:p-3 bg-white/20 rounded-xl">
                <i className={`${stat.icon} text-sm xs:text-base sm:text-lg lg:text-2xl`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-4 lg:gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl p-2 xs:p-3 sm:p-4 lg:p-6 shadow-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4 lg:mb-6">
            <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-gray-800">Sales Overview</h3>
            <button className="text-pink-600 hover:text-pink-700 text-xs lg:text-sm font-medium">
              View Report
            </button>
          </div>
          <div className="h-32 xs:h-40 sm:h-48 lg:h-64">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white rounded-2xl p-2 xs:p-3 sm:p-4 lg:p-6 shadow-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4 lg:mb-6">
            <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-gray-800">Order Distribution</h3>
            <button className="text-pink-600 hover:text-pink-700 text-xs lg:text-sm font-medium">
              View Details
            </button>
          </div>
          <div className="h-32 xs:h-40 sm:h-48 lg:h-64">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl p-2 xs:p-3 sm:p-4 lg:p-6 shadow-2xl border border-gray-100">
        <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4 lg:mb-6">
          <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-gray-800">Recent Orders</h3>
          <button className="text-pink-600 hover:text-pink-700 text-xs lg:text-sm font-medium">
            View All
          </button>
        </div>
        
        <div className="overflow-x-auto md:overflow-x-visible">
          <table className="w-full min-w-0">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 text-gray-600 font-semibold text-xs lg:text-sm whitespace-nowrap">User</th>
                <th className="text-left py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 text-gray-600 font-semibold text-xs lg:text-sm whitespace-nowrap">Product</th>
                <th className="text-left py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 text-gray-600 font-semibold text-xs lg:text-sm whitespace-nowrap">Status</th>
                <th className="text-left py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 text-gray-600 font-semibold text-xs lg:text-sm whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.length > 0 ? (
                recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-pink-50 transition-colors">
                    <td className="py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 text-gray-800 text-xs lg:text-sm whitespace-nowrap truncate max-w-[60px] xs:max-w-[80px] sm:max-w-[120px]">{order.user}</td>
                    <td className="py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 text-gray-600 text-xs lg:text-sm whitespace-nowrap truncate max-w-[40px] xs:max-w-[60px] sm:max-w-[100px]">{order.product}</td>
                    <td className="py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 whitespace-nowrap">
                      <span className={`px-1 xs:px-2 lg:px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-1 xs:py-2 lg:py-3 px-1 xs:px-2 lg:px-4 text-gray-600 text-xs lg:text-sm whitespace-nowrap">{order.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500 text-sm">
                    Tidak ada data untuk tanggal ini
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard