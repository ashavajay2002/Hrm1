import React from 'react';

const Table = ({ 
  columns = [], 
  data = [], 
  onRowClick, 
  className = '',
  loading = false,
  emptyMessage = "No data found"
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#F1F3F6] sticky top-0 z-10">
          <tr>
            {columns.map((col, idx) => (
              <th 
                key={idx} 
                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6B7280] border-b border-[#F1F3F6]"
                style={{ width: col.width }}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F1F3F6]">
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-10 text-center">
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 border-2 border-[#4F7DF3] border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm text-[#6B7280]">Loading data...</span>
                 </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-10 text-center text-[#6B7280]">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr 
                key={item.id || index}
                onClick={() => onRowClick?.(item)}
                className={`group hover:bg-[#F7F9FC] transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
              >
                {columns.map((col, idx) => (
                  <td key={idx} className="px-6 py-4 text-sm text-[#1F2937] group-hover:text-[#4F7DF3] transition-colors duration-200">
                    {col.render ? col.render(item[col.key], item) : String(item[col.key] || '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
