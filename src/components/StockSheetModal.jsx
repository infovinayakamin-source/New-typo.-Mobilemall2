import React, { useState } from 'react';
import { catalogProducts, brandList } from '../data/catalogData';
import { useBusiness } from '../context/BusinessContext';
import {
  X,
  FileSpreadsheet,
  Download,
  Printer,
  Search,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';

export default function StockSheetModal() {
  const { isStockSheetModalOpen, setIsStockSheetModalOpen, config, formatPrice } = useBusiness();
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isStockSheetModalOpen) return null;

  const filtered = catalogProducts.filter((p) => {
    if (selectedBrand !== 'all' && p.brand !== selectedBrand) return false;
    if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  // Export CSV
  const handleDownloadCsv = () => {
    let csv = 'SKU,Model,Brand,Storage,Condition,Available Units,MOQ,Tier 1 Rate,Tier 2 Rate,Master Lot,Suggested MSRP\n';
    filtered.forEach((p) => {
      csv += `"${p.id}","${p.name}","${p.brand}","${p.storage}","${p.condition}",${p.stockCount},${p.moq},"${p.tier1Price}","${p.tier2Price}","${p.tier3Price}","${p.suggestedMSRP}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `MobileMall_Wholesale_StockSheet_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#071A13] border border-[#143527] rounded-3xl max-w-5xl w-full text-white overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="p-5 border-b border-[#143527] bg-[#05130E] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5C07B]/15 border border-[#E5C07B]/30 flex items-center justify-center text-[#E5C07B]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2 font-heading">
                <span>Daily Wholesale Inventory Sheet</span>
                <span className="text-xs font-black text-[#05130E] px-2 py-0.5 rounded-full bg-[#E5C07B]">
                  Live Dispatch
                </span>
              </h2>
              <p className="text-xs text-[#A3B8AD] flex items-center gap-2 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#E5C07B]" />
                <span>Date: {currentDate} • Relief Rd Ahmedabad Hub • Clean IMEI Guaranteed</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsStockSheetModalOpen(false)}
            className="w-9 h-9 rounded-full bg-[#05130E] text-[#A3B8AD] hover:text-white flex items-center justify-center border border-[#143828] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Actions Bar */}
        <div className="p-4 bg-[#071A13] border-b border-[#143527] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter stock sheet..."
                className="w-full bg-[#05130E] text-xs text-white placeholder-[#789284] pl-8 pr-3 py-2 rounded-xl border border-[#143828] focus:outline-none focus:border-[#E5C07B]"
              />
              <Search className="w-3.5 h-3.5 text-[#789284] absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>

            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-[#05130E] text-xs text-white px-3 py-2 rounded-xl border border-[#143828] focus:outline-none focus:border-[#E5C07B]"
            >
              {brandList.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleDownloadCsv}
              className="px-3.5 py-2 bg-[#E5C07B] text-[#05130E] font-black text-xs rounded-xl hover:bg-[#F3E5AB] transition-all flex items-center gap-1.5 shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV (Excel)</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-[#05130E] border border-[#143828] text-white font-bold text-xs rounded-xl hover:border-[#E5C07B] transition-all flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-[#E5C07B]" />
              <span>Print Sheet</span>
            </button>
          </div>
        </div>

        {/* Inventory Table Container */}
        <div className="flex-1 overflow-y-auto p-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#05130E] text-[#A3B8AD] uppercase font-bold sticky top-0 border-b border-[#143828]">
              <tr>
                <th className="py-2.5 px-3">SKU</th>
                <th className="py-2.5 px-3">Model / Specification</th>
                <th className="py-2.5 px-3">Condition</th>
                <th className="py-2.5 px-3">Stock Units</th>
                <th className="py-2.5 px-3">MOQ</th>
                <th className="py-2.5 px-3">Tier 1 Rate</th>
                <th className="py-2.5 px-3">Tier 2 Rate</th>
                <th className="py-2.5 px-3">Master Lot</th>
                <th className="py-2.5 px-3">Est. MSRP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#143828]/50">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-[#0A2219] transition-colors">
                  <td className="py-2.5 px-3 font-mono text-[#E5C07B] text-[11px] font-bold">
                    {item.id.toUpperCase()}
                  </td>
                  <td className="py-2.5 px-3">
                    <div className="font-extrabold text-white">{item.name}</div>
                    <div className="text-[10px] text-[#A3B8AD]">{item.storage} • {item.colors.join(', ')}</div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#05130E] border border-[#143828] text-[#A3B8AD] font-semibold">
                      {item.condition}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 font-bold text-emerald-400">
                    {item.stockCount} Units
                  </td>
                  <td className="py-2.5 px-3 text-[#A3B8AD]">
                    {item.moq} pcs
                  </td>
                  <td className="py-2.5 px-3 font-extrabold text-white">
                    {formatPrice(item.tier1Price)}
                  </td>
                  <td className="py-2.5 px-3 font-bold text-[#E5C07B]">
                    {formatPrice(item.tier2Price)}
                  </td>
                  <td className="py-2.5 px-3 font-black text-[#F3E5AB]">
                    {formatPrice(item.tier3Price)}
                  </td>
                  <td className="py-2.5 px-3 text-[#789284]">
                    {formatPrice(item.suggestedMSRP)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#05130E] border-t border-[#143828] text-[11px] text-[#789284] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>*Live inventory updated daily at 09:30 AM. IMEI scan verification provided with every proforma.</span>
          <span className="text-[#E5C07B] font-bold">Relief Rd, Ahmedabad Central Dispatch Hub</span>
        </div>

      </div>
    </div>
  );
}
