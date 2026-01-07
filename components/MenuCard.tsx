import React from 'react';

interface MenuCardItem {
  name: string;
  active?: boolean;
}

interface MenuCardProps {
  title?: string;
  items: MenuCardItem[];
  className?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, items, className = "" }) => {
  return (
    <div className={`bg-white rounded-[18px] border border-[#eee] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6 md:p-8 w-full max-w-md ${className}`}>
      {title && (
        <h3 className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-6 px-2">
          {title}
        </h3>
      )}
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`group flex items-center justify-between py-4 px-2 transition-all duration-300 rounded-xl hover:bg-[#f9f9f9] cursor-pointer ${
              index !== items.length - 1 ? 'border-b border-[#f5f5f5]' : ''
            }`}
          >
            <span className={`text-[16px] md:text-[17px] tracking-tight transition-all duration-300 ${
              item.active ? 'font-bold text-black' : 'font-medium text-gray-700'
            }`}>
              {item.name}
            </span>
            
            {/* Green Check Icon Circle */}
            <div className="flex-shrink-0 w-[22px] h-[22px] bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 transform group-hover:scale-110 transition-transform">
              <svg 
                className="w-3 h-3 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;