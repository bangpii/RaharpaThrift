import React, { useState } from 'react'
import Navigasi from '../components/admin/Navigasi'
import Dashboard from '../components/admin/Dashboard'
import AkunUsers from '../components/admin/AkunUsers'
import ItemUsers from '../components/admin/ItemUsers'
import Laporan from '../components/admin/Laporan'
import Item from '../components/admin/Item'
import Chat from '../components/admin/Chat'

const Admin = () => {
  const [activePage, setActivePage] = useState('Dashboard')
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const renderContent = () => {
    switch(activePage) {
      case 'Dashboard': return <Dashboard />
      case 'Chat' : return <Chat/>
      case 'Akun Users': return <AkunUsers />
      case 'Item Users': return <ItemUsers />
      case 'Laporan': return <Laporan />
      case 'Item': return <Item />
      default: return <Dashboard />
    }
  }

  const handleLogout = () => {
    console.log('Logout clicked')
    setShowLogoutModal(false)
  }

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const handleNavItemClick = (item) => {
    setActivePage(item)
    setIsMobileNavOpen(false)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-4 md:p-6 flex gap-4 md:gap-6">
        {/* Mobile Toggle Button - Kecil */}
        <button
          onClick={handleMobileNavToggle}
          className="fixed top-4 right-4 z-50 md:hidden bg-amber-600 text-white p-2 rounded-lg shadow-lg hover:bg-amber-700 transition-colors"
        >
          <i className={`bx ${isMobileNavOpen ? 'bx-x' : 'bx-menu'} text-lg`}></i>
        </button>

        {/* Sidebar Navigasi */}
        <div className={`
          fixed md:relative z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-80
        `}>
          <Navigasi 
            activePage={activePage}
            setActivePage={handleNavItemClick}
            setShowLogoutModal={setShowLogoutModal}
          />
        </div>
        
        {/* Mobile Overlay */}
        {isMobileNavOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileNavOpen(false)}
          ></div>
        )}
        
        {/* Content Area - Ada jarak dengan navigasi */}
        <div className="flex-1">
          <div className="w-full h-[93.5vh] bg-white rounded-2xl shadow-2xl p-6 md:p-8 overflow-auto">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl transform scale-100 animate-fade-in max-w-sm w-full mx-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Logout</h3>
              <p className="text-gray-600 mb-6">Apakah Anda yakin ingin logout?</p>
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Batal
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-colors font-medium"
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Admin