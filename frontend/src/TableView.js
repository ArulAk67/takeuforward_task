import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TableView() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5500/ide/entries');
        const modifiedData = response.data.map(item => ({
          ...item,
          code: item.code.substring(0, 100) 
        }));
        setTableData(modifiedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // console.log(tableData);
  return (
    <div className="mx-auto p-4 w-full bg-black text-cyan-300 min-h-screen flex flex-col items-center">
      <div>
      <h2 className="font-bold mb-4 text-center italic text-3xl">Table View</h2>
      </div>
      <div className="overflow-x-auto font-medium">
        <table className=" table-auto w-full">
          <thead>
            <tr>
              {tableData.length > 0 && Object.keys(tableData[0]).map((key, index) => (
                <th key={index} className="border px-16 py-8 capitalize italic text-xl">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="border px-8 py-4 text-xl">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableView;