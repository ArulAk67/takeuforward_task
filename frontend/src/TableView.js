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

  return (
    <div>
      <h2>Table View</h2>
      <table>
        <thead>
          <tr>
            {tableData.length > 0 &&
              Object.keys(tableData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            {/* Generate table headers based on the keys of the first object in tableData */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
              {/* Generate table cells based on the values of each row */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;