import React from "react";
import "boxicons/css/boxicons.min.css";

const WishList = ({ onClose }) => {
  // Data wishlist
  const wishlistItems = [
    {
      id: 1,
      name: "Kaos Polos Premium",
      price: "Rp 120.000",
      image: "./01.jpeg",
      rating: "4.8"
    },
    {
      id: 2,
      name: "Hoodie Oversize",
      price: "Rp 240.000",
      image: "./02.jpeg",
      rating: "4.9"
    },
    {
      id: 3,
      name: "Kemeja Linen",
      price: "Rp 180.000",
      image: "./03.jpeg",
      rating: "4.7"
    },
    {
      id: 4,
      name: "Blouse Floral",
      price: "Rp 150.000",
      image: "./04.jpeg",
      rating: "4.6"
    },
    {
      id: 5,
      name: "Jaket Denim",
      price: "Rp 275.000",
      image: "./05.jpeg",
      rating: "4.8"
    }
  ];

  // Calculate total keseluruhan
  const totalKeseluruhan = wishlistItems.reduce((total, item) => {
    return total + parseInt(item.price.replace('Rp ', '').replace('.', ''));
  }, 0);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl border border-pink-100 
                    shadow-[0_10px_30px_rgba(236,72,153,0.1),0_4px_12px_rgba(236,72,153,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]
                    transform transition-all duration-500 hover:shadow-[0_20px_40px_rgba(236,72,153,0.15),0_8px_24px_rgba(236,72,153,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]
                    hover:-translate-y-1 relative p-6">
      
      {/* Efek 3D Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/50 pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent
                      drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
          <span className="text-black">Item Wishlist</span>
        </h1>
        
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <input 
              type="text"
              placeholder="Cari item..."
              className="pl-10 pr-4 py-2 border border-pink-200 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
                         bg-white text-sm w-48
                         shadow-[0_4px_12px_rgba(236,72,153,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)]"
            />
            <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400
                         drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"></i>
          </div>

          {/* Close Button untuk Mobile */}
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl 
                       bg-gradient-to-r from-pink-500 to-pink-600 text-white 
                       shadow-[0_6px_16px_rgba(236,72,153,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)]
                       transform transition-all duration-300 hover:scale-110 
                       hover:shadow-[0_8px_24px_rgba(236,72,153,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] lg:hidden"
          >
            <i className="bx bx-x text-xl"></i>
          </button>
        </div>
      </div>

      {/* Wishlist Items Container - Scroll lebih tinggi untuk mobile */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[75vh] lg:max-h-96
                     scrollbar-hide">
        {wishlistItems.map((item) => (
          <div 
            key={item.id}
            className="flex items-center gap-4 p-5 border border-pink-100 rounded-2xl 
                       shadow-[0_8px_20px_rgba(236,72,153,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]
                       hover:shadow-[0_12px_28px_rgba(236,72,153,0.15),inset_0_1px_2px_rgba(255,255,255,0.9)]
                       transition-all duration-300 bg-gradient-to-r from-pink-50 to-white 
                       transform hover:-translate-y-1"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 
                           shadow-[0_8px_20px_rgba(236,72,153,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)]
                           flex items-center justify-center text-white text-3xl overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-lg font-bold text-gray-900 
                           drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                {item.name}
              </p>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <i className="bx bx-star text-yellow-400 
                             drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"></i>
                {item.rating} • Wishlist Item
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-3xl text-pink-500 transform hover:scale-110 transition-transform cursor-pointer
                             drop-shadow-[0_2px_8px_rgba(236,72,153,0.3)]">
                <i className="bx bxs-heart"></i>
              </div>
              <p className="text-xl font-bold text-gray-800 
                           drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Keseluruhan - Paling bawah */}
      <div className="bg-white text-pink-500 rounded-xl p-4 mt-auto
                     shadow-[0_8px_20px_rgba(236,72,153,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]
                     border border-pink-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 font-medium
                         drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              Total Wishlist
            </p>
            <p className="text-lg font-bold text-pink-600
                         drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              Rp {totalKeseluruhan.toLocaleString('id-ID')}
            </p>
          </div>
          <div className="flex items-center gap-2 text-pink-500
                         drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
            <i className="bx bx-heart text-lg"></i>
            <span className="text-sm font-medium">{wishlistItems.length} items</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WishList;