import React from 'react'

const Navigasi = ({ activePage, setActivePage, setShowLogoutModal }) => {
  const Nav = [
    "Dashboard", 
    "Akun Users",
    "Item Users",
    "Laporan",
    "Item"
  ]

  const getIcon = (name) => {
    switch(name) {
      case "Dashboard": return 'bx bx-home'
      case "Akun Users": return 'bx bx-user'
      case "Item Users": return 'bx bx-package'
      case "Laporan": return 'bx bx-bar-chart'
      case "Item": return 'bx bx-box'
      case "Logout": return 'bx bx-log-out'
      default: return 'bx bx-circle'
    }
  }

  const handleNavClick = (item) => {
    setActivePage(item)
  }

  const handleLogoutClick = () => {
    setShowLogoutModal(true)
  }

  return (
    <div className="h-[93.5vh] bg-pink-600 rounded-2xl shadow-2xl p-6 flex flex-col relative overflow-hidden">
      
      {/* Efek 3D Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      
      {/* Bagian User/Admin */}
      <div className="flex flex-col items-center mb-8 relative z-10">
        <div className="relative group mb-4">
          <div className="absolute -inset-2 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <img 
            src="/01.jpeg" 
            alt="Admin" 
            className="relative w-28 h-28 rounded-full border-4 border-white/90 shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          
          <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-pink-200">
            <i className='bx bx-pencil text-pink-600 text-sm'></i>
          </button>
        </div>
        
        <h2 className="text-white font-bold text-xl">Admin</h2>
        <div className="w-16 h-0.5 bg-white/40 rounded-full mt-2"></div>
      </div>

      {/* Navigasi Menu Utama */}
      <div className="flex-1 flex flex-col relative z-10 space-y-2">
        {Nav.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item)}
            className={`flex items-center gap-3 p-3 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group border ${
              activePage === item 
                ? 'bg-white/30 border-white/30' 
                : 'bg-white/15 border-white/10 hover:bg-white/25'
            }`}
          >
            <div className={`p-2 rounded-lg transition-colors ${
              activePage === item ? 'bg-white/30' : 'bg-white/20 group-hover:bg-white/30'
            }`}>
              <i className={`${getIcon(item)} text-lg`}></i>
            </div>
            <span className="font-medium text-sm">{item}</span>
            <i className='bx bx-chevron-right ml-auto text-sm transform group-hover:translate-x-0.5 transition-transform'></i>
          </button>
        ))}
      </div>

      {/* Tombol Logout Terpisah */}
      <div className="relative z-10 mt-auto pt-4">
        <button
          onClick={handleLogoutClick}
          className="flex items-center gap-3 p-3 bg-white/20 text-white rounded-xl shadow-lg hover:bg-white/30 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group border border-white/20 w-full"
        >
          <div className="p-2 bg-white/25 rounded-lg group-hover:bg-white/35 transition-colors">
            <i className='bx bx-log-out text-lg'></i>
          </div>
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Navigasi