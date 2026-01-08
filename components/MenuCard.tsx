import React from 'react';

interface MenuCardItem {
  name: string;
  active?: boolean;
  icon?: React.ReactNode;
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
            className={`group flex items-center justify-between py-6 px-6 -mx-4 transition-all duration-200 ease-out rounded-xl hover:bg-[#f7f7f7] cursor-pointer ${
              index !== items.length - 1 ? 'border-b border-[#f5f5f5]' : ''
            } hover:border-transparent`}
          >
            <div className="flex items-center gap-4">
              {item.icon && (
                <div className={`flex-shrink-0 transition-colors duration-200 ${item.active ? 'text-ds-red' : 'text-slate-400 group-hover:text-ds-red'}`}>
                  {item.icon}
                </div>
              )}
              <span className={`text-[16px] md:text-[17px] tracking-tight transition-all duration-200 transform group-hover:translate-x-1 ${
                item.active ? 'font-bold text-black' : 'font-medium text-gray-700'
              }`}>
                {item.name}
              </span>
            </div>
            
            {/* Green Check Icon Circle */}
            <div className="flex-shrink-0 w-[22px] h-[22px] bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 transform transition-all duration-200 group-hover:scale-110 group-hover:rotate-[360deg]">
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