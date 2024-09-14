import React from 'react';
import './Services.css'; // We'll create this file for styling

function Services({ data }) {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="table-container">
        <table className="services-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {data.map(service => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>${service.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;