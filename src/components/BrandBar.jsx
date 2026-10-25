import React from 'react';
import { brandList } from '../data/catalogData';

export default function BrandBar({ selectedBrand, onSelectBrand }) {
  return (
    <section className="bg-[#071A13] border-b border-[#143527] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#789284] font-bold">
              Distributor Portfolio:
            </span>
            <span className="text-xs text-[#E5C07B] font-semibold">
              Authorized OEM Lines
            </span>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
            {brandList.map((brand) => {
              const isActive = selectedBrand === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => onSelectBrand(brand.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#E5C07B] text-[#05130E] shadow-md shadow-[#E5C07B]/20 font-bold'
                      : 'bg-[#05130E] text-[#C4D6CD] border border-[#143527] hover:border-[#E5C07B]/50 hover:text-[#F3E5AB]'
                  }`}
                >
                  <span>{brand.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-[#05130E]/20 text-[#05130E]'
                        : 'bg-[#071A13] text-[#789284]'
                    }`}
                  >
                    {brand.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
