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
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-4 flex justify-center relative overflow-hidden">
      
      {/* Hapus h-[93vh] dan ganti dengan min-h-screen atau flex-1 */}
      <div 
        className="w-full min-h-screen bg-white rounded-2xl shadow-2xl p-6 mt-4 overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-3xl relative z-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        
        <Header />
        <Title />

        {/* Layout kanan-kiri - ubah height dan overflow */}
        <div className="flex gap-4 mt-4 flex-1 min-h-0 relative">

          {/* Chat - ubah overflow */}
          <div 
            className="flex-1 h-full overflow-auto" // ubah dari overflow-hidden ke overflow-auto
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <ChatRoom 
              showWishlist={showWishlist} 
              setShowWishlist={setShowWishlist}
            />
          </div>

          {/* Wishlist - Hidden di mobile */}
          <div 
            className={`w-[35%] h-full overflow-hidden transition-all duration-500 max-lg:fixed max-lg:inset-0 max-lg:z-50 max-lg:w-full max-lg:h-full ${
              showWishlist ? 'max-lg:block' : 'max-lg:hidden'
            }`}
          >
            {/* Overlay untuk close wishlist di mobile */}
            {showWishlist && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setShowWishlist(false)}
              />
            )}
            
            {/* Wishlist Content */}
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