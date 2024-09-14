import React from 'react';
import './FinancialData.css';

function FinancialData({ data }) {
  if (!data || data.length === 0) {
    return <div>Loading financial data...</div>;
  }

  return (
    <div className="financial-data-container">
      <h1>Profit & Loss</h1>
      <div className="table-container">
        <table className="financial-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Sales</th>
              <th>Expenses</th>
              <th>Operating Profit</th>
              <th>OPM %</th>
              <th>Other Income</th>
              <th>Interest</th>
              <th>Depreciation</th>
              <th>Profit before tax</th>
              <th>Tax %</th>
              <th>Net Profit</th>
              <th>EPS in Rs</th>
              <th>Dividend Payout %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record, index) => (
              <tr key={index}>
                <td>{record.year}</td>
                <td>{record.sales.toLocaleString()}</td>
                <td>{record.expenses.toLocaleString()}</td>
                <td>{record.operating_profit.toLocaleString()}</td>
                <td>{(record.opm * 100).toFixed(0)}%</td>
                <td>{record.other_income.toLocaleString()}</td>
                <td>{record.interest.toLocaleString()}</td>
                <td>{record.depreciation.toLocaleString()}</td>
                <td>{record.profit_before_tax.toLocaleString()}</td>
                <td>{(record.tax * 100).toFixed(0)}%</td>
                <td>{record.net_profit.toLocaleString()}</td>
                <td>{record.eps.toFixed(2)}</td>
                <td>{(record.dividend_payout * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialData;