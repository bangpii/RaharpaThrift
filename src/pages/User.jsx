// User.jsx - Background Premium
import React, { useState, useEffect } from 'react'
import Header from '../components/user/Header'
import Title from '../components/user/Title'
import ChatRoom from '../components/user/ChatRoom'
import WishList from '../components/user/WishList'
import AOS from 'aos'
import 'aos/dist/aos.css'

const User = () => {
  const [showWishlist, setShowWishlist] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 flex justify-center relative overflow-hidden">
      
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmRiZjIzIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div 
        data-aos="fade-up"
        data-aos-delay="200"
        className="w-full max-w-7xl relative z-10"
      >
        
        <Header />
        
        {/* Title - Hidden di bawah 445px */}
        <div className="max-[445px]:hidden">
          <Title />
        </div>

        {/* Layout kanan-kiri */}
        <div className="flex gap-4 mt-4 h-[calc(100vh-200px)] min-h-[500px] max-[445px]:mt-2 max-[445px]:h-[calc(100vh-120px)]">

          <div 
            className="flex-1 h-full"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <ChatRoom 
              showWishlist={showWishlist} 
              setShowWishlist={setShowWishlist}
            />
          </div>

          <div 
            className={`w-[35%] h-full transition-all duration-500 max-lg:fixed max-lg:inset-0 max-lg:z-50 max-lg:w-full max-lg:h-full ${
              showWishlist ? 'max-lg:block' : 'max-lg:hidden'
            }`}
          >
            {showWishlist && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setShowWishlist(false)}
              />
            )}
            
            <div className={`w-full h-full bg-white rounded-2xl shadow-2xl transform transition-all duration-300 relative z-50 ${
              showWishlist ? 'max-lg:scale-100 max-lg:opacity-100' : 'max-lg:scale-95 max-lg:opacity-0'
            }`}>
              <WishList onClose={() => setShowWishlist(false)} />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default User