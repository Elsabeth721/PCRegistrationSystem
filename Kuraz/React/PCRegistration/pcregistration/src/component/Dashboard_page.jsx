import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { AiOutlineDashboard } from 'react-icons/ai'; 


const data = [
  { name: 'HP', value: 400, color: '#8884d8' },
  { name: 'Dell', value: 300, color: '#82ca9d' },
  { name: 'Lenovo', value: 300, color: '#ffc658' },
  { name: 'MacBook', value: 200, color: '#ff8042' },
  { name: 'Toshiba', value: 278, color: '#8dd1e1' },
  { name: '', value: 189, color: '#a4de6c' },
];

const getTotalValue = (data) => {
  return data.reduce((acc, item) => acc + item.value, 0);
};

const Dashboard = () => {
  const totalValue = getTotalValue(data);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 bg-blueBlack overflow-auto h-screen">     
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white p-4 ">Dashboard</h1>
          <AiOutlineDashboard size={30} className="text-white" />
        </div>
        <div className='bg-white h-1 mb-3 -mt-3'/>
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4">
          <div className="bg-containerBg p-4 rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold text-textPrimary">Total Registered Students</h2>
            <p className="text-textSecondary">From last month</p>
            <h3 className="text-3xl md:text-4xl font-bold text-textAccent">120</h3>
          </div>

          <div className="bg-containerBg p-4 rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold text-textPrimary">Total Admins</h2>
            <p className="text-textSecondary">From last month</p>
            <h3 className="text-3xl md:text-4xl font-bold text-textAccent">10</h3>
          </div>
        </div>

        {/* Row 2*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <div className="col-span-1 lg:col-span-2 bg-containerBg p-4 rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold text-textPrimary mb-2">PC Classification</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              {/* name of the pc*/}
              <div className="mr-0 lg:mr-8 mb-4 lg:mb-0">
                <ul className="space-y-2">
                  {data.map((entry, index) => (
                    <li key={`legend-${index}`} className="flex items-center">
                      <div
                        className="w-4 h-4 mr-2"
                        style={{ backgroundColor: entry.color }}
                      ></div>
                      <span className="text-sm md:text-lg font-semibold text-gray-700">
                        {entry.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pie Chart */}
              <div className="relative">
                <PieChart width={300} height={250}>
                  <Pie
                    data={data}
                    cx={150} 
                    cy={125}
                    outerRadius={100}
                    innerRadius={70}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>

                <div className="absolute text-center w-full top-[95px] left-0">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{totalValue}</p>
                  <p className="text-xs md:text-sm text-gray-500">Total PCs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-containerBg p-4 rounded-lg shadow">
              <h2 className="text-xl md:text-2xl font-bold text-textPrimary">New PCs Registered</h2>
              <p className="text-textSecondary">From last month</p>
              <h3 className="text-3xl md:text-4xl font-bold text-textAccent">50</h3>
            </div>

            <div className="bg-containerBg p-4 rounded-lg shadow">
              <h2 className="text-xl md:text-2xl font-bold text-textPrimary">New Admins Registered</h2>
              <p className="text-textSecondary">From last month</p>
              <h3 className="text-3xl md:text-4xl font-bold text-textAccent">5</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
