import React from "react";
import tasksData from "../data/tasks.json";
import employeesData from "../data/employees.json";

function getEmployeeName(id){
  const e = employeesData.find(x => x.id === id);
  return e ? e.name : "—";
}

export default function TaskList({ onSelectTask }) {
  const [status, setStatus] = React.useState("");
  const filtered = tasksData.filter(t => (status ? t.status === status : true));

  return (
    <div className="panel">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <strong>Tasks</strong>
        <select value={status} onChange={e=>setStatus(e.target.value)} className="input" style={{width:160}}>
          <option value="">All status</option>
          <option value="pending">pending</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
        </select>
      </div>
      <div className="list">
        {filtered.map(t => (
          <div key={t.id} className="employee-card" style={{alignItems:"flex-start"}}>
            <div className="meta">
              <div style={{fontWeight:600}}>{t.title}</div>
              <div className="small">{t.description}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div className="small">Assignee: {getEmployeeName(t.assigned_to)}</div>
              <div style={{marginTop:8}}><button className="btn" onClick={()=>onSelectTask(t)}>View</button></div>
            </div>
          </div>
        ))}
        {filtered.length===0 && <div className="small">No tasks</div>}
      </div>
    </div>
  );
}
