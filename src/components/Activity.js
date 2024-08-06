import React, { useState } from 'react';

export default function Activity() {
  const [selectedCategory, setSelectedCategory] = useState('weekly');

  // Sample data for the bar chart
  const data = {
    daily: [
      { set1: 3, set2: 5 },
      { set1: 8, set2: 6 },
      { set1: 5, set2: 7 },
      { set1: 12, set2: 10 },
      { set1: 7, set2: 8 },
      { set1: 6, set2: 5 },
      { set1: 10, set2: 9 },
    ],
    weekly: [
      { set1: 7, set2: 9 },
      { set1: 10, set2: 12 },
      { set1: 5, set2: 6 },
      { set1: 14, set2: 15 },
      { set1: 9, set2: 11 },
      { set1: 11, set2: 8 },
      { set1: 13, set2: 10 },
    ],
    monthly: [
      { set1: 5, set2: 8 },
      { set1: 12, set2: 10 },
      { set1: 9, set2: 11 },
      { set1: 10, set2: 12 },
      { set1: 8, set2: 9 },
      { set1: 15, set2: 14 },
      { set1: 11, set2: 13 },
    ],
  };

  const categories = ['daily', 'weekly', 'monthly'];

  // X-axis labels
  const xAxisLabels = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25];
  const yAxisLabels = [15, 10, 5, 0];

  return (
    <div className="w-full bg-slate-800 pr-6 pl-7 py-3 rounded-lg shadow-md">
        {/* <div className='flex justify-start mb-4'>
            
        </div> */}
      {/* Category Selection */}
      <div className="flex justify-between items-center mb-4">
      <h2 className='font-sans text-white text-lg font-semibold'>Activity</h2>
        <select
          className="px-3 py-2 border font-sans border-gray-600 font-bold bg-gray-600 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Bar Chart */}
      <div className="relative w-full h-48 ">
        <div className="absolute w-[92%] left-6 right-0 bottom-0 flex justify-evenly items-end">
          {xAxisLabels.map((label, index) => (
            <div key={label} className="flex flex-col items-center" style={{ width: '8%' }}>
              <div className="flex justify-between w-full items-end">
                <div
                  className="bg-blue-300 transition-all duration-300 rounded-t-[50px] rounded-b-[50px]"
                  style={{
                    height: `${data[selectedCategory][index % data[selectedCategory].length].set1 * 12}px`,
                    width: '40%',
                  }}
                />
                <div
                  className="bg-blue-300 transition-all duration-300 rounded-t-[50px] rounded-b-[50px]"
                  style={{
                    height: `${data[selectedCategory][index % data[selectedCategory].length].set2 * 8}px`,
                    width: '40%',
                  }}
                />
              </div>
              <span className="mt-1 text-sm text-white">{label}</span>
            </div>
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute top-0 bottom-[45px] left-0 flex flex-col justify-between">
          {yAxisLabels.map((yLabel) => (
            <div key={yLabel} className="text-sm text-white">
              {`${yLabel}k`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
