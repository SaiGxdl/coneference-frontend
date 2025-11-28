import React from "react";
import employeesData from "../data/employees.json";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeList({ onSelect }) {
  const [q, setQ] = React.useState("");
  const filtered = employeesData.filter(e => {
    if (!q) return true;
    const s = q.toLowerCase();
    return e.name.toLowerCase().includes(s) || e.role.toLowerCase().includes(s) || e.department.toLowerCase().includes(s);
  });

  return (
    <div className="panel">
      <div className="search">
        <input className="input" placeholder="Search employees..." value={q} onChange={(e)=>setQ(e.target.value)} />
      </div>
      <div className="list">
        {filtered.map(emp => <EmployeeCard key={emp.id} emp={emp} onView={onSelect} />)}
        {filtered.length===0 && <div className="small">No employees found</div>}
      </div>
    </div>
  );
}
