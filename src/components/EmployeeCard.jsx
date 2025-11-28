import React from "react";

export default function EmployeeCard({ emp, onView }) {
  return (
    <div className="employee-card" role="article">
      <div className="meta">
        <div className="name">{emp.name}</div>
        <div className="sub">{emp.role} • {emp.department}</div>
      </div>

      <div className="right">
        <div className="small">{emp.email}</div>
        <div style={{marginTop:8}}>
          <button className="btn" onClick={() => onView(emp)}>View</button>
        </div>
      </div>
    </div>
  );
}
