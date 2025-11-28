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
    <div className="panel sidebar">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <strong>Tasks</strong>
        <select value={status} onChange={e=>setStatus(e.target.value)} className="input" style={{width:140}}>
          <option value="">All status</option>
          <option value="pending">pending</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
        </select>
      </div>

      {filtered.map(t => (
        <div key={t.id} className="task">
          <div style={{flex:1}}>
            <div style={{fontWeight:700}}>{t.title}</div>
            <div className="small" style={{marginTop:6}}>{t.description}</div>
            <div style={{marginTop:8}} className="small">Due: {t.due_date}</div>
          </div>

          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8}}>
            <div className="small">Assignee: {getEmployeeName(t.assigned_to)}</div>
            <div>
              <button className="btn secondary" onClick={()=>onSelectTask(t)}>View</button>
            </div>
          </div>
        </div>
      ))}

      {filtered.length===0 && <div className="small">No tasks</div>}
    </div>
  );
}
